function runProgram(input) {
  // TC = O(logn)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, arr);

  console.log(missingGP(N, arr));
}

function missingGP(N, arr) {
  let low = 0;
  let high = N - 1;
  // Tn = a * r ^(n-1)
  // r = (Tn / a)^(1/(n-1))
  // r= Math.floor( Math.pow(arr[n-1]/arr[0], 1.0/n))

  //let ratio = Math.floor((arr[high] / arr[low]) ** (1 / (N - 1)));
  let ratio = Math.floor(Math.pow(arr[N - 1] / arr[low], 1.0 / N));
  //let ratio = -2;
  console.log(ratio);

  return checkMissingGP(arr, low, high, ratio);
}

function checkMissingGP(arr, low, high, ratio) {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid + 1] / arr[mid] != ratio) return arr[mid] * ratio;

    if (mid > 0 && arr[mid] / arr[mid - 1] != ratio)
      return arr[mid - 1] * ratio;

    if (arr[mid] == arr[0] * Math.pow(ratio, mid)) {
      return checkMissingGP(arr, mid + 1, high, ratio);
    } else {
      return checkMissingGP(arr, low, mid - 1, ratio);
    }
  }
}
// -243 = 1 * r^(6-1)
// 1, -3, 9, -27, 81, -243
// r = (-243)^0.2
// r = -3
if (process.env.USERNAME === "dell") {
  runProgram(`
9
2 4 8 16 32 64 128 512 1024
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
