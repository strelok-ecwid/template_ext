chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.title === "Новый документ - Google Документы") {
    /* chrome.windows.create({
      focused: true,
      width: 400,
      height: 600,
      type: 'popup',
      url: 'popup.html',
      top: 0,
      left: 0
    },
    () => {}) */    
    /* chrome.runtime.sendMessage({
      msg: "something_completed", 
      data: {
          subject: "Loading",
          content: "Just completed!"
      }
    }); */

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (tabId,changeInfo,tab) => {        
        console.log(window.location.toString());
        chrome.storage.sync.set({token: window.location.toString()}, function() {
          console.log('Value is set to ' + window.location.toString());
        });        
      },
      args:[tabId,changeInfo,tab],
    });
    
  }
});

