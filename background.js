// Listen for extension button click or keyboard shortcut
chrome.action.onClicked.addListener(async (tab) => {
  // Execute content script in the active tab
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  } catch (error) {
    console.error('Error executing content script:', error);
  }
});