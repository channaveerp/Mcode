let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 9, 9, 8];
let obj = {};
for (i of arr) {
  if (obj[i]) {
    obj[i]++;
  } else {
    obj[i] = 1;
  }
}

// console.log(obj);

function logA() {
  console.log("A");
}
function logB() {
  console.log("B");
}
function logC() {
  console.log("C");
}
function logD() {
  console.log("D");
}

// Click the "RUN" button to learn how this works!
logA();
let a = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
async function getData() {
  let ans = await a;
  console.log("ANS", ans);
  // return ans;
}
console.log("E", getData());
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();
