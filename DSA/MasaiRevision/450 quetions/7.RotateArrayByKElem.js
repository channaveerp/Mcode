//https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1

let arr = [85, 25, 1, 32, 54, 6];
let K = 4;

function rotateArrByK(arr, K) {
  let str1 = "";
  let str2 = "";
  for (let i = arr.length - K; i < arr.length; i++) {
    str1 += arr[i] + " ";
  }

  for (let i = 0; i < arr.length - K; i++) {
    str2 += arr[i] + " ";
  }

  return str1 + str2;
}

console.log(rotateArrByK(arr, K));

function rotate(nums, k) {
  if (k > 0) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - k - 1);
    reverse(nums, nums.length - k, nums.length - 1);
    reverse(nums, 0, nums.length - 1);
  }

  return nums;
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++, end--;
  }

  return arr;
}

console.log(reverse(arr, start, end));
