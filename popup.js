
let isActive = document.getElementById("checkActive");
var state = {}

chrome.storage.sync.get("checkstate", (data) => {
  isActive.checked = data["checkstate"];
  state.checkstate = data["checkstate"];
  console.log(state);
});

document.addEventListener('DOMContentLoaded', () => {
  let isActive = document.getElementById("checkActive");
  isActive.addEventListener("click", checkedHandler);
})

function checkedHandler() {
  console.log(state);
  let isActive = document.getElementById("checkActive");
  if (isActive.checked) {
    state["checkstate"] = true;
    chrome.storage.sync.set(state);
    console.log("isActive is checked");
  } else {
    state["checkstate"] = false;
    chrome.storage.sync.set(state);
    console.log("isActive is unchecked");
  }
}
