/*

arr = [0, 4, 22, 4, 14, 4, 2];
//arr = [0, 1, 2, 4, 1, 1, 1];

let flag = false;
for (let i = 1; i < arr.length; i = i + 2) {
  if (arr[i - 1] > arr[i] && arr[i] < arr[i + 1]) {
    flag = true;
  }
}

console.log(flag);
*/
/*
function longestString(...strs) {
  return strs.sort(function (a, b) {
    return b.length - a.length;
  })[0];
}

console.log(longestString("boop", "bloomburg", "hello"));
*/
/*
let arr = ["coder", "byte", "code"];

function thirdLargest(arr) {
  return arr.sort((a, b) => b.length - a.length)[2];
}

console.log(thirdLargest(arr));
*/
var str = "aa aa odg dog gdo";

function arrChallange(str) {
  let arr = str.split(" ");
  let arr1 = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i].trim().split("").sort().join(""));
  }
  for (let i = 0; i < arr1.length; i++) {
    for(let j = 0; )
  }
  return count;
}

console.log(arrChallange(str));
