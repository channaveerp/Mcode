//https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1

let arr = [5, 4, 9, 8, 1, 98, 54, 36];
let K = 4;

function KthMin(arr, K) {
  let obj = {};
  for (key of arr) {
    obj[key] ? obj[key]++ : (obj[key] = 1);
  }
  //console.log(obj);

  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (i + 1 === K) {
      console.log(keys[i]);
    }
  }
}
KthMin(arr, K);
