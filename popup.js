
let btn=document.getElementById('snow');
let token=[]
let url = ''

chrome.storage.sync.get(['token'], function(result) {
    console.log('Value currently is ' + result.token);
    token=result.token.split("/")[5];
    url = `'https://docs.googleapis.com/v1/documents/${token}:batchUpdate'`
  });

  btn.addEventListener('click',()=>{console.log(url)})