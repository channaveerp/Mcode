// https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1;

let arr = [1, 2, 3];
let K = 3;

function MinimiseThemaxDiffBWHeight(arr, K) {
  if (arr.length == 1) return 0;

  arr.sort((a, b) => a - b);
  let ans = arr[arr.length - 1] - arr[0];

  let smallest = arr[0] + K;
  let largest = arr[arr.length - 1] - K;
  let temp = 0;

  if (smallest > largest) {
    temp = smallest;
    smallest = largest;
    largest = temp;
  }

  for (let i = 0; i < arr.length; i++) {
    let sub = arr[i] - K;
    let add = arr[i] + K;

    if (sub >= smallest || add <= largest) continue;

    if (largest - sub <= add - smallest) {
      smallest = sub;
    } else {
      largest = add;
    }
  }
  return Math.min(ans, largest - smallest);
}

console.log(MinimiseThemaxDiffBWHeight(arr, K));

//Shyni 8884849582
