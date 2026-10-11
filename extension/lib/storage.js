import { DEFAULT_SETTINGS } from './pipeline.js';
import { DEFAULT_TEMPLATES } from './messages.js';

// Tout est stocké en local dans ton navigateur (rien n'est envoyé ailleurs).
export async function loadState() {
  const data = await chrome.storage.local.get(['prospects', 'settings', 'templates']);
  return {
    prospects: data.prospects || [],
    settings: { ...DEFAULT_SETTINGS, ...data.settings },
    templates: { ...DEFAULT_TEMPLATES, ...data.templates },
  };
}

export function saveProspects(prospects) {
  return chrome.storage.local.set({ prospects });
}

export function saveSettings(settings) {
  return chrome.storage.local.set({ settings });
}

export function saveTemplates(templates) {
  return chrome.storage.local.set({ templates });
}
