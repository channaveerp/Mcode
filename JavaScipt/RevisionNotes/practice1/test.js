// const arr = [];
// const forEachArr = [];
// const limit = 10;

// for (let i = 0; i < limit; i++) {
//   let randomNumber = Math.floor(Math.random() * 100);

//   arr.push(randomNumber);
// }
// console.log("REGULAR", arr);

// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] % 2 == 0) {
// //     arr[i] = arr[i] * 2;
// //   }
// // }
// // console.log("WITH_DOOUBLE_EVEN", arr);

// arr.forEach((item) => {
//   if (item % 2 == 0) {
//     forEachArr.push(item * 2);
//   } else {
//     forEachArr.push(item);
//   }
// });
// console.log("WITH_DOOUBLE_EVEN", forEachArr);

// const newArr = arr.map((item) => {
//   if (item % 2 == 0) {
//     return item * 2;
//   } else {
//     return item;
//   }
// });
// // console.log("WITH_DOOUBLE_EVEN", newArr);
// // newArra
// const [one, two, ...rest] = arr

const a = {
  name: "Alice",
  add: {
    city: "Pune",
  },
};
const b = {
  name: "Alice",
  add: {
    city: "Pune",
  },
};

console.log(a == b);
console.log(a === b);

const c = a;
console.log(a === c);

// let d = {};
// let e = d;
// console.log(d == {});
