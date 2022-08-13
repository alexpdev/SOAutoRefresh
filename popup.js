let isActive = document.getElementById("check-active");

isActive.addEventListener("change", () => {
  if (this.checked) {
    chrome.storage.local.set({active: true});
    console.log("isActive is checked");
  } else {
    chrome.storage.local.set({active: false});
    console.log("isActive is unchecked");
  }
})


let changeColor = document.getElementById("changeColor");
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});


changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: setPageBackgroundColor,
  });
});

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  })
}
