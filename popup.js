$.when($.ready).then(()=>{
  $("#head").click((e) => {
    if (e.currentTarget.checked){
      $(".check").each((i, elem) => {elem.checked = true})
    } else {
      $(".check").each((i, elem) => {elem.checked = false})
    }
  })
  $(".check").each((i,elem) => {
    elem.click((e) => {
      let sites = [];
      $(".check").each((i,elem) => {
        if (elem.checked){
          sites.push(elem.name);
        }
      })
      chrome.runtime.sendMessage({sites: sites});
      chrome.storage.sync.set({sites: sites});
    })
  })
});


// function checkedHandler() {
//   let sites = [];
//   let boxes = document.getElementsByClassName("checks");
//   for (let i = 0; i < boxes.length; i++){
//     if (boxes[i].checked){
//       sites.push(boxes[i].name);
//       console.log(boxes[i].name);
//     }
//   }
//   chrome.runtime.sendMessage({ sites: sites });
//   chrome.storage.sync.set({ sites: sites });
// }
