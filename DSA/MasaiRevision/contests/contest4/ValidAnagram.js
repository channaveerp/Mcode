// Pasha and Shasha and valid anagram
// Description

// Pasha and Shasha are fighting over two strings, whether they are anagrams or not, help them.

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = +input[0];

  let arr = [];
  let line = 1;

  for (let x = 0; x < test * 2; x++) {
    arr.push(input[line++].trim());
  }

  //console.log(test, arr);

  for (let i = 0; i < arr.length; i += 2) {
    if (
      arr[i].split("").sort().join("") == arr[i + 1].split("").sort().join("")
    ) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    2
      abcd
      dcab
      aa
      aaa
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
  input = input.trim().split(/[\n\r]+/);
  let N = +input[0];
  let arr = [];

  for (let x = 0, line = 1; x < N * 2; x++) {
    let str = input[line++].trim();
    arr.push(str);
  }

  console.log(N, arr);
  //   for (let i = 0; i < arr.length; i += 2) {
  //     if (
  //       arr[i].split("").sort().join("") == arr[i + 1].split("").sort().join("")
  //     ) {
  //       console.log("True");
  //     } else {
  //       console.log("False");
  //     }
  //   }
}
if (process.env.LOGNAME === "dell") {
  runProgram(`2
      abcd
      dcab
      aa
      aaa`);
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
}*/
