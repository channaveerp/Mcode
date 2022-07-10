//https://oj.masaischool.com/contest/1563/problem/BS-4
function runProgram(input) {
  // TC = O(logn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, K, arr);
  console.log(searchTarget(N, K, arr));
  //console.log(findMin(arr));
}

function searchTarget(N, K, arr) {
  let low = 0;
  let high = N - 1;

  while (low <= high) {
    let mid = low + parseInt((high - low) / 2, 10);

    if (arr[mid] == K) return mid;

    // the bottom half is sorted
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= K && K < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    // upper half is sorted
    else {
      if (arr[mid] < K && K <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

function findMin(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (arr[left] > arr[right]) {
    let mid = left + parseInt((right - left) / 2, 10);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    5 2
    3 4 5 1 2
          `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

/*
int rotated_binary_search(int A[], int N, int key) {
  int L = 0;
  int R = N - 1;

  while (L <= R) {
    // Avoid overflow, same as M=(L+R)/2
    int M = L + ((R - L) / 2);
    if (A[M] == key) return M;

    // the bottom half is sorted
    if (A[L] <= A[M]) {
      if (A[L] <= key && key < A[M])
        R = M - 1;
      else
        L = M + 1;
    }
    // the upper half is sorted
    else {
      if (A[M] < key && key <= A[R])
        L = M + 1;
      else
        R = M - 1;
    }
  }
  return -1;
}
*/

/*
function findMin(arr,low,high)
    {
        // This condition is needed to handle the case when array
        // is not rotated at all
        if (high < low)
            return arr[0];
         
        // If there is only one element left
        if (high == low)
            return arr[low];
         
        // Find mid
        let mid =low + Math.floor((high - low)/2); 
         
        // Check if element (mid+1) is minimum element. Consider
        // the cases like {3, 4, 5, 1, 2}
        if (mid < high && arr[mid+1] < arr[mid])
            return arr[mid+1];
         
        // Check if mid itself is minimum element
        if (mid > low && arr[mid] < arr[mid - 1])
            return arr[mid];
   
        // Decide whether we need to go to left half or right half
        if (arr[high] > arr[mid])
            return findMin(arr, low, mid-1);
         
        return findMin(arr, mid+1, high);
    }
*/
