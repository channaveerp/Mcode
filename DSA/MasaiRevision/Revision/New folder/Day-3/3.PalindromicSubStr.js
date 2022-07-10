//https://oj.masaischool.com/contest/1677/problem/03

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let str = input[0].trim();
  //   console.log(str);
  console.log(findSubStr(str));
}

function checkPalindrom(str) {
  let half_lenght = (str.length - 1) / 2;

  for (let i = 0; i < half_lenght; i++) {
    if (str[i] != str[str.length - 1 - i]) return false;
  }
  return true;
}

function findSubStr(str) {
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let subStr = "";
    for (let j = i; j < str.length; j++) {
      subStr += str[j];
      if (checkPalindrom(subStr)) {
        max = Math.max(max, subStr.length);
      }
    }
  }
  return max;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    thisracecarisgood
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
