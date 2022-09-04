// background.js
let checkstate = true;
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ checkstate: checkstate });
});
chrome.webNavigation.onCommitted.addListener(handler);
chrome.runtime.onMessage.addListener((message, port) => {
  chrome.storage.sync.set({ checkstate: message.checkstate });
  checkstate = message.checkstate;
});
function handler(details) {
  chrome.storage.sync.get("checkstate", (state) => {
    if (state.checkstate === true) {
      let transit = details.transitionQualifiers;
      if (transit.length > 0 && transit[0] == "forward_back") {
        if (details.url.includes("stackoverflow.com")) {
          chrome.tabs.reload(details.tabId);
        }
      }
    }
  });
}
