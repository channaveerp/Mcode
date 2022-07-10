let arr = [
  [10, 20, 30, 40],
  [15, 21, 35, 50],
  [27, 29, 37, 58],
  [32, 33, 39, 60],
];
let target = 50;

function search(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i < arr.length && j >= 0) {
    if (arr[i][j] == target) {
      console.log(`row: ${i}, col: ${j}`);
      return;
    }
    if (arr[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  console.log(-1);
}

search(arr, target);
