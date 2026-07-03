import { describe, expect, it } from 'vitest';
import type { CharacterProfile, UserProfile } from '../types';
import { buildFeedSystemPrompt, FEED_BATCH_SIZE, getXhsCharacterPostQuota, resolveXhsAuthorCharacter } from './xhsFeed';

const sameNameChars = [
  { id: 'char-a', modelId: 'model-a', name: 'Same Name', systemPrompt: 'First persona.' },
  { id: 'char-b', name: 'Same Name', systemPrompt: 'Second persona.' },
] as CharacterProfile[];

const user = { name: 'User', avatar: '', bio: 'tester' } as UserProfile;

describe('xhs character identity', () => {
  it('scales character post quota with roster size', () => {
    expect(getXhsCharacterPostQuota(0)).toBe(0);
    expect(getXhsCharacterPostQuota(1)).toBe(1);
    expect(getXhsCharacterPostQuota(4)).toBe(4);
    expect(getXhsCharacterPostQuota(8)).toBeGreaterThan(getXhsCharacterPostQuota(4));
    expect(getXhsCharacterPostQuota(20)).toBeGreaterThan(getXhsCharacterPostQuota(8));
    expect(getXhsCharacterPostQuota(100)).toBe(Math.floor(FEED_BATCH_SIZE * 0.6));
  });

  it('lists same-name posters with distinct charIds in the prompt', () => {
    const prompt = buildFeedSystemPrompt(sameNameChars, user);

    expect(prompt).toContain('Same Name (ID: model-a)');
    expect(prompt).toContain('Same Name (ID: char-b)');
    expect(prompt).toContain('charId="model-a"');
    expect(prompt).toContain('charId="char-b"');
    expect(prompt).toContain('角色帖目标 2 条');
    expect(prompt).toContain('真正归属以 charId 为准');
  });

  it('resolves character posts by charId before falling back to name', () => {
    const matched = resolveXhsAuthorCharacter(
      { isCharacter: true, author: 'Same Name', charId: 'char-b' },
      sameNameChars,
    );

    expect(matched?.id).toBe('char-b');
  });

  it('resolves by modelId when it differs from the storage id', () => {
    const matched = resolveXhsAuthorCharacter(
      { isCharacter: true, author: 'Same Name', charId: 'model-a' },
      sameNameChars,
    );

    expect(matched?.id).toBe('char-a');
  });

  it('uses author name only as a fallback and prevents duplicate character authors', () => {
    const used = new Set<string>();

    const first = resolveXhsAuthorCharacter({ isCharacter: true, author: 'Same Name' }, sameNameChars, used);
    const duplicate = resolveXhsAuthorCharacter({ isCharacter: true, author: 'Same Name', charId: first?.id }, sameNameChars, used);

    expect(first?.id).toBe('char-a');
    expect(duplicate).toBeUndefined();
  });
});
