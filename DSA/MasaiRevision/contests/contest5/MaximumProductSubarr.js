// Maximum Product Subarray
// Description

// Given an array A of size n of positive and negative integers, find a subarray (containing at least one number) with the maximum product.

function runProgram(input) {
  // TC = O(n^2)
  // SC = O(4)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let test = +input[0];
  for (let x = 0, line = 1; x < test; x++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    //console.log(N, arr);

    let minValue = arr[0];
    let maxValue = arr[0];
    let maxProduct = arr[0];

    for (let i = 1; i < N; i++) {
      if (arr[i] < 0) {
        var temp = maxValue;
        maxValue = minValue;
        minValue = temp;
      }

      maxValue = Math.max(arr[i], maxValue * arr[i]);
      minValue = Math.min(arr[i], minValue * arr[i]);

      maxProduct = Math.max(maxProduct, maxValue);
    }

    console.log(maxProduct);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    3
    -3 0 -2
    4
    4 5 -1 2
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
function runProgram(input) {
  var input = input.split(/[\r\n]+/);
  var tc = +input[0];
  var line = 0;
  for (var i = 0; i < tc; i++) {
    var len = +input[++line];
    var a1 = input[++line]
      .trim()
      .split(" ")
          .map(Number);
      console.log(prodSub(a1,len))
  }
}
function prodSub(arr, n) {
  var minimumValue = arr[0];
  var maximumValue = arr[0];

  var maximumProduct = arr[0];

  for (var i = 1; i < n; i++) {
    if (arr[i] < 0) {
      var neew = maximumValue;
      maximumValue = minimumValue;
      minimumValue = neew;
    }

    maximumValue = Math.max(arr[i], maximumValue * arr[i]);
    minimumValue = Math.min(arr[i], minimumValue * arr[i]);
    maximumProduct = Math.max(maximumProduct, maximumValue);
  }

  return maximumProduct;
}

*/
