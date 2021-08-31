chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.title === "Новый документ - Google Документы") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        confirm("Загрузить шаблон?");
      },
    });
  }
});
