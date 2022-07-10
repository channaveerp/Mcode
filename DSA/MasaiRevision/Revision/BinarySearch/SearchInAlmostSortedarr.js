//Search In a Almost Sorted Array

let arr = [10, 3, 40, 20, 50, 80, 70];
let key = 80;

let left = 0;
let right = arr.length - 1;

console.log(searchInAlmostSortedArr(arr, left, right, key));

function searchInAlmostSortedArr(arr, left, right, key) {
  if (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] == key) return mid;

    if (left < mid && arr[mid - 1] == key) return mid - 1;

    if (mid < right && arr[mid + 1] == key) return mid + 1;

    if (arr[mid] > key) {
      return searchInAlmostSortedArr(arr, left, mid - 2, key);
    }
    return searchInAlmostSortedArr(arr, mid + 1, right, key);
  }
  return -1;
}

/*
function binarySearch(arr,l,r,x)
{
    if (r >= l)
        {
            let mid = l + Math.floor((r - l) / 2);
   
            // If the element is present at
            // one of the middle 3 positions
            if (arr[mid] == x)
                return mid;
            if (mid > l && arr[mid - 1] == x)
                return (mid - 1);
            if (mid < r && arr[mid + 1] == x)
                return (mid + 1);
   
            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > x)
                return binarySearch(arr, l, mid - 2, x);
   
            // Else the element can only be present
            // in right subarray
            return binarySearch(arr, mid + 2, r, x);
        }
   
        // We reach here when element is
        // not present in array
        return -1;
}
*/
