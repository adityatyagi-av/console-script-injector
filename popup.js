document.getElementById('runScript').addEventListener('click', () => {
  const script = document.getElementById('scriptInput').value;
  console.log('Script to execute:', script); // Debug log

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    console.log('Active tab:', activeTab); // Debug log

    // Check if the URL of the active tab is not a chrome:// URL
    
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTab.id, allFrames: true },
          files: ['content.js'] // Inject the content script
        },
        () => {
          // After the content script is injected, send the message to execute the script
          chrome.tabs.sendMessage(activeTab.id, { type: 'executeScript', code: script }, (response) => {
            if (chrome.runtime.lastError) {
              console.error('Script execution failed: ', chrome.runtime.lastError.message);
            } else {
              console.log('Script executed successfully:', response);
            }
          });
        }
      );
   
  });
});
