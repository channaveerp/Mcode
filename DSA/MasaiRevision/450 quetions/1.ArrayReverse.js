// https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/

function ReverseArray(arr) {
  let ans = [];

  for (let i = arr.length-1; i >= 0; i--) {
    ans.push(arr[i]);
  }
  return ans;
}

console.log(ReverseArray([9, 5, 6, 8, 7]));


