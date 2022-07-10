// What is a classback function in JS
// we know that func are first class citizens or functions that we can take and pass it into another function is known as cllbck func
// give access to the asyncronpus to synchronous
/*
function x() {
  console.log("x");
}
x(function y() {
  console.log("y");
});
// how to use it in asynchronous
setTimeout(function () {
  console.log("timer");
}, 5000);
// x, timer(after 5sec)
*/
/*
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
// how to use it in asynchronous
setTimeout(function () {
  console.log("timer");
}, 5000);
// x, y, timer(after 5sec)
*/

function attachEventListners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("button Clicked", ++count);
  });
  //     above function is also callback function
}
attachEventListners();

// JS is a single threaded and synchronous language
// JS has one call Stack, everything is doone in this one only if somewher it block then it blocks the output


//garbage collection and remove eventListneres
/*
eventLisners takes memory these are heavy, it slow down page functioning. so we remove these event listners.
*/