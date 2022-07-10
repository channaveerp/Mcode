//https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

let arr = [1, 2, 3, -2, 5, 3, -8];
//console.log(arr.slice(3));

function largestSubArrSum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      var subArray = arr.slice(i, j + 1);
      //console.log(subArray);

      let sum = subArray.reduce((a, b) => a + b);

      if (sum > max) max = sum;
    }
  }
  return max;
}
//console.log(largestSubArrSum(arr));
// [-2,-4 5 -8 3 6]
//sum=3
//
function largestSubArrSum1(arr) {
  let max = -999;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= sum + arr[i]) {
      sum += arr[i];
    } else {
      sum = arr[i];
    }

    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(largestSubArrSum1(arr));

//https://oj.masaischool.com/contest/1676/problem/6
function subArrLessThanM(N, M, arr) {
  let sum = arr[0];
  let i = 0;
  let j = 0;
  let count = 0;

  // 1 2 1 2 3
  // i=0, j =0
  // sum = 1 + 2
  // sum< M
  // i=0, j=1==> count = 1, sum=1+2,
  // i = 0, j =2 ==> count = 3, sum = 1 + 2 + 1;
  // i = 0, j =3 ==> count = 3+3, sum = 1 + 2 + 1 + 2;
  // else, i = 1, j =3 ==> count = 3+3, sum =  2 + 1 + 2;
  // else, i = 2, j =3 ==> count = 6 + 1 , sum =   1 + 2;

  //
  while (i < N && j < N) {
    if (sum < M) {
      j++;
      if (j >= i) {
        count += j - i; //
      }
      if (j < N) {
        sum += arr[j];
      }
    } else {
      sum -= arr[i];
      i++;
    }
  }
  return count;
}
