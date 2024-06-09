chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'executeScript') {
    try {
      const result = eval(message.code);
      sendResponse({ success: true, result });
    } catch (error) {
      sendResponse({ success: false, error: error.message });
    }
  }
});
