// https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

function moveNegative(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      // when i is not j
      if (i != j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }

      j++;
    }
  }
  return arr;
}

console.log(moveNegative(arr));
