let arr = [8, 7, 6];

let n = arr.length;

// let ans = [];
// let count;

// if (n == 1) {
//   console.log([]);
// }
// for (let i = 0; i < n; i++) {
//   let product = 1;

//   count = i;
//   if (i != count) {
//     product *= arr[i];
//   }

//   ans.push(product);

//   i = 0;
// }

// console.log(ans);

let ans = [];

if (n == 1) {
  console.log([]);
}

for (let i = 0; i < n; i++) {
  let product = 1;

  //   var count = i;
  //   if (i != count) {
  product *= arr[i];
  //}

  ans.push(product);
}
console.log(arr);
