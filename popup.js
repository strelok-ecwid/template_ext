
let btn=document.getElementById('snow');
let token=[]
let url = ''
const API_KEY = 'AIzaSyCiiJx4QNtQnFYvTJXD2QlwwIbkNoPJh-M';
const DISCOVERY_DOCS = ["https://docs.googleapis.com/$discovery/rest?version=v4"];

function onGAPILoad() {
  gapi.client.init({
    // Don't pass client nor scope as these will init auth2, which we don't want
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOCS,
  }).then(function () {
    console.log('gapi initialized')
  }, function(error) {
    console.log('error', error)
  });
}
onGAPILoad();
chrome.storage.sync.get(['token'], function(result) {
    console.log('Value currently is ' + result.token);
    token=result.token.split("/")[5];
    url = `'https://docs.googleapis.com/v1/documents/${token}:batchUpdate'`
    
  });

  //btn.addEventListener('click',()=>{console.log(url)})
  //btn.addEventListener('click',()=>{fetch('https://docs.googleapis.com/v1/documents',{method:"POST",title:"ЧЕК-ЛИСТ"})})

  