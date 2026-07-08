import { SKILL_TAXONOMY } from './skillsData';

export function detectSkillsFromText(text) {
  const lowerText = text.toLowerCase();
  const detected = [];

  for (const [canonicalName, aliases] of Object.entries(SKILL_TAXONOMY)) {
    const isPresent = aliases.some((alias) => lowerText.includes(alias));
    if (isPresent) {
      detected.push(canonicalName);
    }
  }

  return detected;
}