let arr = [10, 15, 8, 3, 7, 20, 1, 12];

console.log(quickSort(arr));

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

// function partition(arr, start, end) {
//   // take last or first value

//   let pivotValue = arr[end];
//   let pivotIndex = start;

//   for (let i = start; i < end; i++) {
//     if (arr[i] < pivotValue) {
//       //swapping
//       [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//       pivotIndex++;
//     }
//   }

//   [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
//   return pivotIndex;
// }

// function quickSortRecursive(arr, start, end) {
//   if (start >= end) return;

//   //return pivot index
//   let index = partition(arr, start, end);

//   quickSort(arr, start, index - 1);
//   quickSort(arr, index + 1, end);
// }
/*
//https://stackabuse.com/quicksort-in-javascript
function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}


function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}
*/
