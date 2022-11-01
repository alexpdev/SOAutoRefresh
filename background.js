// background.js
let sites = ["stackoverflow.com", "askubuntu.com", "stackexchange.com", "serverfault.com", "superuser.com"]
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({sites : sites });
});
chrome.webNavigation.onCommitted.addListener(handler);
chrome.runtime.onMessage.addListener((message, port) => {
  chrome.storage.local.set({ sites: message.sites });
  sites = message.sites;
});
function handler(details) {
  chrome.storage.sync.get("sites", (state) => {
    if (state.sites) {
      let transit = details.transitionQualifiers;
      if (transit.length > 0 && transit[0] == "forward_back") {
        for (let site of state.sites){
          if (details.url.includes(site)) {
            chrome.tabs.reload(details.tabId);
            break;
          }
        }
      }
    }
  });
}
