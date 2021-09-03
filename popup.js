
let btn=document.getElementById('snow');

chrome.storage.sync.get(['token'], function(result) {
    console.log('Value currently is ' + result.token);
  });