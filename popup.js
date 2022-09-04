$('table').tableCheckbox({
  selectedRowClass:'warning',
  checkboxSelector:'td:first-of-type input[type="checkbox"],th:first-of-type input[type="checkbox"]',
  isChecked: function($checkbox) {
    return $checkbox.is(':checked');
  }
});
$('table').tableCheckbox();

document.addEventListener("DOMContentLoaded", () => {
  let sites = [];
  let boxes = document.getElementsByClassName("checks");
  chrome.storage.sync.get("sites", (data) => {
    sites.concat(data);
  });
  for (let i=0; i<boxes.length; i++){
  
});
function checkedHandler() {
  let sites = [];
  let boxes = document.getElementsByClassName("checks");
  for (let i = 0; i < boxes.length; i++){
    if (boxes[i].checked){
      sites.push(boxes[i].name);
      console.log(boxes[i].name);
    }
  }
  chrome.runtime.sendMessage({ sites: sites });
  chrome.storage.sync.set({ sites: sites });
}
