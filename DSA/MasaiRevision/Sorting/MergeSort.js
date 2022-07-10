let arr = [10, 15, 8, 3, 7, 20, 1, 12];

console.log(MergeSort(arr));

// require to functions

function merge(left, rigth) {
  let arr = [];

  while (left.length && rigth.length) {
    left[0] < rigth[0] ? arr.push(left.shift()) : arr.push(rigth.shift());
  }

  return [...arr, ...left, ...rigth];
}

function MergeSort(arr) {
  let half = arr.length / 2;

  if (arr.length < 2) return arr;

  let left = arr.splice(0, half);
  return merge(MergeSort(left), MergeSort(arr));
}

/*
function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}*/
