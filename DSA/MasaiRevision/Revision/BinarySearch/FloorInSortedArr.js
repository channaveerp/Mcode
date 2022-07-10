//Floor In a Sorted Array

let arr = [2, 8, 10, 10, 12, 19, 25];
let key = 26;
let left = 0;
let right = arr.length - 1;
console.log(floorInSortedArr(arr, left, right, key));

function floorInSortedArr(arr, left, right, key) {
  let mid = left + Math.floor((right - left) / 2);

  if (left > right) return -1;

  //if (key < arr[left]) return -1;

  if (key >= arr[right]) return arr[right];

  if (arr[mid] == key) return key;

  // key lies b/w mid ans mid-1
  if (0 < mid && arr[mid - 1] <= key && arr[mid] > key) return arr[mid - 1];

  //if key is smaller than mid than key is in left half

  if (key < arr[mid]) return floorInSortedArr(arr, left, mid - 1, key);

  return floorInSortedArr(arr, mid + 1, right, key);
}
