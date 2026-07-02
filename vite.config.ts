import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { execSync } from 'node:child_process';
import { bakeVoiceMiddleware } from './server/bake-voice-middleware';
import worker from './worker/index.js';

const RELEASE_BRANCHES = new Set(['main', 'master']);

function readBranch(): string {
  if (process.env.GITHUB_REF_NAME) return process.env.GITHUB_REF_NAME;
  if (process.env.VERCEL_GIT_COMMIT_REF) return process.env.VERCEL_GIT_COMMIT_REF;
  if (process.env.CF_PAGES_BRANCH) return process.env.CF_PAGES_BRANCH;
  if (process.env.BRANCH) return process.env.BRANCH;
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return 'unknown';
  }
}

function readCommit(): string {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 7);
  if (process.env.VERCEL_GIT_COMMIT_SHA) return process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7);
  if (process.env.CF_PAGES_COMMIT_SHA) return process.env.CF_PAGES_COMMIT_SHA.slice(0, 7);
  if (process.env.COMMIT_REF) return process.env.COMMIT_REF.slice(0, 7);
  try {
    return execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return 'unknown';
  }
}

const gitInfo = { branch: readBranch(), commit: readCommit() };
const isReleaseBranch = RELEASE_BRANCHES.has(gitInfo.branch);

export default defineConfig(({ command, mode }) => {
  const buildTarget = (process.env.MORO_BUILD_TARGET || process.env.VITE_MORO_TARGET || mode || 'native').trim().toLowerCase() === 'web' ? 'web' : 'native';
  let showBuildBadge = !isReleaseBranch;
  if (command === 'build' && buildTarget === 'native') showBuildBadge = false;
  if (process.env.VITE_HIDE_BUILD_BADGE === '1') showBuildBadge = false;
  if (process.env.VITE_SHOW_BUILD_BADGE === '1') showBuildBadge = true;

  return {
    plugins: [
      react(),
      legacy({
        targets: ['Android >= 5'],
        modernPolyfills: true,
      }),
      {
        name: 'bake-voice-middleware',
        configureServer(server) {
          server.middlewares.use('/api/minimax/bake-voice', bakeVoiceMiddleware);
        },
      },
      {
        name: 'moro-worker-dev-routes',
        configureServer(server) {
          server.middlewares.use('/qqmusic', async (req, res) => {
            try {
              const chunks: Buffer[] = [];
              for await (const chunk of req) {
                chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
              }
              const body = Buffer.concat(chunks);
              const origin = `http://${req.headers.host || '127.0.0.1'}`;
              const request = new Request(`${origin}/qqmusic${req.url || ''}`, {
                method: req.method || 'GET',
                headers: new Headers(req.headers as Record<string, string>),
                body: body.length ? body : undefined,
              });
              const response = await worker.fetch(request, {}, {});
              res.statusCode = response.status;
              response.headers.forEach((value, key) => res.setHeader(key, value));
              res.end(Buffer.from(await response.arrayBuffer()));
            } catch (e: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ status: 'error', message: e?.message || String(e) }));
            }
          });
        },
      },
    ],
    define: {
      __BUILD_BRANCH__: JSON.stringify(gitInfo.branch),
      __BUILD_COMMIT__: JSON.stringify(gitInfo.commit),
      __BUILD_BADGE_VISIBLE__: JSON.stringify(showBuildBadge),
    },
    base: buildTarget === 'native' || process.env.GITHUB_PAGES ? './' : '/',
    esbuild: {
      drop: ['debugger'],
    },
    server: {
      proxy: {
        '/api/minimax/t2a': {
          target: 'https://api.minimaxi.com',
          changeOrigin: true,
          secure: true,
          rewrite: () => '/v1/t2a_v2',
        },
        '/api/minimax/get-voice': {
          target: 'https://api.minimaxi.com',
          changeOrigin: true,
          secure: true,
          rewrite: () => '/v1/get_voice',
        },
        '/api/minimax/music': {
          target: 'https://api.minimaxi.com',
          changeOrigin: true,
          secure: true,
          rewrite: () => '/v1/music_generation',
        },
      },
    },
    build: {
      outDir: buildTarget === 'native' ? 'dist-native' : 'dist-web',
      assetsDir: 'assets',
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          if (warning.message?.includes('dynamic import will not move module into another chunk')) return;
          defaultHandler(warning);
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
                return 'vendor-react';
              }
              if (id.includes('@phosphor-icons')) {
                return 'vendor-icons';
              }
              if (id.includes('@capacitor')) {
                return 'vendor-capacitor';
              }
              return 'vendor';
            }
            if (id.includes('utils/memoryPalace')) {
              return 'memory-palace';
            }
          },
        },
      },
    },
  };
});
