// https://oj.masaischool.com/contest/1676/problem/3

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N1, N2] = input[0].trim().split(" ").map(Number);
  let arr1 = input[1].trim().split(" ").map(Number);
  let arr2 = input[2].trim().split(" ").map(Number);
  //console.log(N1, arr1, "\n", N2, arr2);
  console.log(maxPair(arr1, arr2));
}

function maxPair(arr1, arr2) {
  let count = 0;
  //   for (let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
  //     if (Math.abs(arr1[i] - arr2[j]) == 0 || Math.abs(arr1[i] - arr2[j]) == 1) {
  //       count++;
  //       break;
  //     }
  //   }
  //   return count;
  let temp = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = temp; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= 1) {
        count++;

        console.log(arr1[i] + ": " + arr2[j]);

        break;
      }
    }
    temp++;
  }
  return count;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  5 3
  0 1 1 9 9
  4 40 0 
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
