const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1 is resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2 is resolved");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3 is resolved");
  }, 3000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("4 is resolved");
  }, 4000);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("5 is resolved");
  }, 4000);
});

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("6 is resolved");
  }, 4000);
});

setTimeout(() => {
  console.log("set time out");
}, 4000);

const res = Promise.all([p1, p2, p3, p4, p5, p6]);
res.then((data) => console.log(data));
