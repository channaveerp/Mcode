//https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

let arr = [5, 4, 9, 8, 1, 98, 54, 36];

function MinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  let sec_max = arr[0];
  let sec_min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }

    //second largest
    if (arr[i] > sec_max && arr[i] !== max) {
      sec_max = arr[i];
    }
    if (arr[i] < sec_min && arr[i] !== min) {
      sec_min = arr[i];
    }
  }

  return [sec_max, sec_min].join(" ");
}

console.log(MinMax(arr));
