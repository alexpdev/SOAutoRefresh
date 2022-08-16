document.addEventListener('DOMContentLoaded', () => {
  let isActive = document.getElementById("checkActive");
  chrome.storage.sync.get("checkstate", (data) => {
    isActive.checked = data["checkstate"];
  });
  isActive.addEventListener("click", checkedHandler);
})

function checkedHandler() {
  let isActive = document.getElementById("checkActive");
  if (isActive.checked === true) {
    chrome.storage.sync.set({checkstate: isActive.checked});
  } else {
    chrome.storage.sync.set({checkstate: isActive.checked});
  }
}
