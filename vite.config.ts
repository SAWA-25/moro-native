import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { execSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { bakeVoiceMiddleware } from './server/bake-voice-middleware';

// 鏋勫缓鏃舵姄 git 鍒嗘敮 + short commit锛屾敞鍏ュ埌 BuildBadge 鏄剧ず銆?
// 闈?git 鐜锛堝鍣ㄣ€乼arball 閮ㄧ讲锛夐€€鍖栨垚 'unknown'锛屼笉褰卞搷鏋勫缓銆?
//
// 鏄剧ず瑙勫垯锛?
//   - 榛樿鍦?main / master 涓婇殣钘忥紙瑙嗕负姝ｅ紡鍙戝竷锛夛紝鍏朵粬鍒嗘敮鏄剧ず
//   - CI detached HEAD 浼樺厛璇?GITHUB_REF_NAME / VERCEL_GIT_COMMIT_REF / CF_PAGES_BRANCH / BRANCH(Netlify)
//   - VITE_HIDE_BUILD_BADGE=1 寮哄埗闅愯棌锛堣鐩栭粯璁わ級
//   - VITE_SHOW_BUILD_BADGE=1 寮哄埗鏄剧ず锛堝湪 master 鏈湴璋冭瘯鐢級
const RELEASE_BRANCHES = new Set(['main', 'master']);
const PROJECT_ROOT = dirname(fileURLToPath(import.meta.url));

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
let showBuildBadge = !isReleaseBranch;
if (process.env.VITE_HIDE_BUILD_BADGE === '1') showBuildBadge = false;
if (process.env.VITE_SHOW_BUILD_BADGE === '1') showBuildBadge = true;

export default defineConfig(({ mode }) => {
  const buildTarget = (process.env.MORO_BUILD_TARGET || process.env.VITE_MORO_TARGET || mode || 'native').trim().toLowerCase() === 'web' ? 'web' : 'native';
  const outDir = resolve(PROJECT_ROOT, buildTarget === 'native' ? 'dist-native' : 'dist-web');
  const platformRoot = resolve(PROJECT_ROOT, 'platforms', buildTarget);

  return {
  root: platformRoot,
  publicDir: resolve(PROJECT_ROOT, 'public'),
  envDir: PROJECT_ROOT,
  cacheDir: resolve(PROJECT_ROOT, 'node_modules/.vite', buildTarget),
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
  ],
  define: {
    __BUILD_BRANCH__: JSON.stringify(gitInfo.branch),
    __BUILD_COMMIT__: JSON.stringify(gitInfo.commit),
    __BUILD_BADGE_VISIBLE__: JSON.stringify(showBuildBadge),
    __BUILD_TARGET__: JSON.stringify(buildTarget),
  },
  // GitHub Pages 鍙戝竷鏃朵娇鐢ㄧ浉瀵硅矾寰勶紝閬垮厤浠撳簱瀛愯矾寰勫鑷磋祫婧?404
  base: buildTarget === 'native' || process.env.GITHUB_PAGES ? './' : './',
  esbuild: {
    // 鍙墺 debugger锛屼繚鐣?console.* 鈥斺€?閮ㄧ讲鍚庢寜 F12 浠嶈兘鐪嬪埌杩愯鏃舵棩蹇楋紝鏂逛究鎺掓煡銆?
    drop: ['debugger'],
  },
  server: {
    fs: {
      allow: [PROJECT_ROOT],
    },
    proxy: {
      '/api/minimax/t2a': {
        target: 'https://api.minimaxi.com',
        changeOrigin: true,
        secure: true,
        rewrite: () => '/v1/t2a_v2',
        // 娉細Vite dev proxy锛堝熀浜?node http-proxy锛変笉鏀寔 `router` 鍔ㄦ€侀€?target锛?
        // 涔嬪墠杩欓噷鍐欑殑 router 鍥炶皟瀹為檯浠庢湭鐢熸晥锛堣闈欓粯蹇界暐锛夈€傚紑鍙戞湡缁熶竴璧板浗鏈嶏紱
        // 娴峰鍖哄煙璺敱鍦ㄧ敓浜х幆澧冿紙Netlify / Cloudflare 鍑芥暟锛夐噷鎸夎姹傚ご澶勭悊銆?
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
    }
  },
  build: {
    outDir,
    emptyOutDir: true,
    assetsDir: 'assets',
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        // 鎶戝埗鍔ㄦ€佸鍏ヤ笌闈欐€佸鍏ユ贩鍚堢殑鏃犲璀﹀憡
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
        }
      }
    }
  }
  };
});

