//Trust issues with setTimeout

// if time is given 5sec there no gaurenty that it take exact 5 sec;

console.log("start");

setTimeout(function cb() {
  console.log("callBack");
}, 0);

console.log("end");

// run million line of code

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expires");
