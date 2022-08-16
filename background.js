// background.js

let checkstate = true;
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({checkstate: checkstate});
  console.log("Checkstate is set");
})

chrome.webNavigation.onCommitted.addListener(handler);

function handler(details) {
  chrome.storage.sync.get("checkstate", (checkstate) => {
    if (checkstate){
      let transit =  details.transitionQualifiers;
      if (transit.length > 0 && transit[0] == "forward_back"){
        if (details.url.includes("stackoverflow.com")){
          chrome.tabs.reload(details.tabId);
    }}} else {
      console.log(checkstate);
}})}
