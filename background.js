chrome.storage.local.set({active: false}, () => {

})

chrome.webNavigation.onCommitted.addListener((details) => {
  let transit =  details.transitionQualifiers;
  if (transit.length > 0 && transit[0] == "forward_back"){
    if (details.url.includes("stackoverflow.com")){
      console.log("This is where I need to refresh the page.");
      chrome.tabs.reload(details.tabId);
    }
  }
})
