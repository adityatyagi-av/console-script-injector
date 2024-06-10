chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension Installed');
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'executeScript') {
    var code = request.code;
    var tabId = request.tabId;
    chrome.tabs.executeScript(tabId, {code: code});
  }
});

