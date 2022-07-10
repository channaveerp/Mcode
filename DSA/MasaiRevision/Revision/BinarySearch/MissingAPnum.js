function runProgram(input) {
  // TC = O(logn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, arr);

  console.log(missingAP(N, arr));
}

function missingAP(N, arr) {
  let low = 0;
  let high = N - 1;
  // Tn = a + (n-1)d
  // Tn -a = (n-1)d
  //
  // d = (Tn - a)/(n-1)
  let d = Math.floor((arr[high] - arr[low]) / (N - 1));

  //console.log(d);

  return checkMissingAP(arr, low, high, d);
}
// [2 4 6 10]
// mid = 4;
//
function checkMissingAP(arr, low, high, d) {
  // low = 2, high = 3, mid = 2;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid + 1] - arr[mid] != d) return arr[mid] + d;
    // (10 - 6 != 2), 6 +2 = 8

    if (mid > 0 && arr[mid] - arr[mid - 1] != d) return arr[mid] - d;
    //

    if (arr[mid] == arr[0] + d * mid) {
      // 4 == 2 + 2*1 true

      return checkMissingAP(arr, mid + 1, high, d);
    } else {
      // 
      return checkMissingAP(arr, low, mid - 1, d);
    }
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  15
  -2 0 2 4 6 8 10 12 14 16 18 20 22 26 28
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
