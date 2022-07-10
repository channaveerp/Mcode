// EventDeligation
// technical of handling events on web page and it is based on event bublling.

/*
events handler can attach direcly to parent insted of induvidual attaching to child. this increase the performence of page.

benifit:
saves memory
write less code
DOM manuPulation
*/

// document.querySelector("#category").addEventListener("click", (e) => {
//   console.log(e.target.id);
//   if (e.target.tagName == "LI") {
//     window.localStorage.href = "/" + e.target.id;
//   }
// }); // this id eventDeligation.

document.querySelector("#form").addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
}); // this id eventDeligation.
