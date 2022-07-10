// setTimeOut + Closures;
/*
function x() {
  var i = 1;

  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("hello");
}
x(); // hello and then after 3 sec prints i
*/

/*
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i); // this i is refering same spot in memory
    }, i * 1000);
  }

  console.log("hello");
}
x(); // hello, 6,6,6,6,6
// in above function loop is runs when code executed and i value iterate and i is save at one point in GEC so after
// completing the loop i will become 6 and when time is iterates per second it prints 6,6,6,6,6


// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i); // copy of i is new at every iteration, 5 I are created here
//     }, i * 1000);
//   }

//   console.log("hello");
// }
// x(); hello, 1,2,3,4,5
// here in every loop I refere new number due to block scope. or fresh new i value is created at every iteration
// and memory location is diff for all i values
*/
/*
var a = 1;
for (var i = 0; i <= 5; i++) {
  a = i;
}
console.log(a); // 5
*/

function x() {
  for (var i = 1; i <= 5; i++) {
    function y(i) {
      setTimeout(function () {
        console.log(i); // now due to closure function y i create new value at every iteration;
      }, i * 1000);
    }
    y(i);
  }

  console.log("hello");
}
x();
