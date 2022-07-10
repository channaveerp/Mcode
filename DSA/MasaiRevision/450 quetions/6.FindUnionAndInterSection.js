//https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1

/*
Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.

Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union
Input:
6 2 
85 25 1 32 54 6
85 2 
Output: 
7
Explanation: 
85, 25, 1, 32, 54, 6, and
2 are the elements which comes in the
union set of both arrays. So count is 7.
*/

// let arr1 = [85, 25, 1, 32, 54, 6];
// let arr2 = [85, 2];

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4];

function union(arr1, arr2) {
  let obj = {};

  for (let key of arr1) {
    obj[key] ? obj[key]++ : (obj[key] = 1);
  }

  for (let key of arr2) {
    obj[key] ? obj[key]++ : (obj[key] = 1);
  }

  let keys = Object.keys(obj).join(" ");
  return keys;
}

// for sorted
function union1(arr1, arr2) {
  let i = 0;
  let j = 0;
  let ans = "";
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ans += arr1[i] + " ";
      i++;
    } else if (arr1[i] > arr2[j]) {
      ans += arr2[i] + " ";
      j++;
    } else {
      ans += arr2[i] + " ";
      j++;
      i++;
    }
  }

  while (i < arr1.length) {
    ans += arr1[i] + " ";
    i++;
  }

  while (j < arr2.length) {
    ans += arr1[j] + " ";
    j++;
  }

  return ans;
}

console.log(union1(arr1, arr2));

// intersection
function intersection(arr1, arr2) {
  let obj = {};
  let ans = [];

  for (let key of arr1) {
    obj[key] ? obj[key]++ : (obj[key] = 1);
  }

  for (let key of arr2) {
    if (obj[key]) ans.push(key);
  }

  return ans;
}

//intersection for sorted;

function intersection1(arr1, arr2) {
  let i = 0;
  let j = 0;
  let ans = "";
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      ans += arr2[i] + " ";
      j++;
      i++;
    }
  }

  return ans;
}

console.log(...intersection1(arr1, arr2));
