//https://oj.masaischool.com/contest/1677/problem/08

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let str = input[line++].trim();
    //console.log(str);
    console.log(vowelPriority(str));
  }
}

function vowelPriority(str) {
  let str1 = "";
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      str1 += str[i];
    } else {
      str2 += str[i];
    }
  }
  return str1 + str2;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    4
    eio
    masaischool
    ubcdefghioel
    rhythm
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
