
document.getElementById('execute').addEventListener('click', function() {
  var code = document.getElementById('code').value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: 'executeScript', code: code});
  });
});