// Chrome, Edge, Brave : un clic sur l'icône ouvre le panneau latéral.
// Opera / Opera GX n'ont pas ce panneau : l'extension y apparaît dans la barre
// latérale d'Opera (« sidebar_action » du manifest), et un clic sur l'icône
// ouvre le même écran dans une fenêtre collée à droite du navigateur.
const PANEL_URL = 'sidepanel.html';
const PANEL_WIDTH = 420;
const isOpera = /\bOPR\//.test(navigator.userAgent);

if (chrome.sidePanel?.setPanelBehavior && !isOpera) {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(console.error);
} else {
  chrome.action.onClicked.addListener(() => openPanelWindow().catch(console.error));
}

async function openPanelWindow() {
  const { panelWindowId } = await chrome.storage.session.get('panelWindowId');
  if (panelWindowId) {
    try {
      await chrome.windows.update(panelWindowId, { focused: true });
      return;
    } catch {
      // La fenêtre a été fermée : on en ouvre une nouvelle.
    }
  }

  const options = { url: PANEL_URL, type: 'popup', width: PANEL_WIDTH };
  let panel;
  const browser = await chrome.windows.getLastFocused({ windowTypes: ['normal'] }).catch(() => null);
  if (browser && browser.state !== 'fullscreen' && browser.width) {
    const { left, top, width, height } = browser;
    try {
      // Panneau à droite et navigateur rétréci pour ne pas se chevaucher (si l'écran est assez large).
      panel = await chrome.windows.create({ ...options, left: left + width - PANEL_WIDTH, top, height });
      if (width >= 900) {
        await chrome.windows.update(browser.id, { state: 'normal', left, top, width: width - PANEL_WIDTH, height });
      }
    } catch {
      // Position refusée (écran trop petit, plusieurs écrans…) : Opera place la fenêtre lui-même.
    }
  }
  panel ??= await chrome.windows.create(options);
  await chrome.storage.session.set({ panelWindowId: panel.id });
}
