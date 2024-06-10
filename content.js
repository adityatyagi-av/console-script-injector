chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'executeScript') {
    var script = document.createElement('script');
    script.textContent = request.code;
    (document.head||document.documentElement).appendChild(script);
    script.remove();
    sendResponse({success: true});
    return true;
  }
});