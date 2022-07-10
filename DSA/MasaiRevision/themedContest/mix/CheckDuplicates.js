// Check duplicate
// Description

// Given an array of integers, check if it contains duplicate element. If present then print YES else print NO.

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    let obj = {};
    // // for (key of arr) {
    // //   obj[key] = obj[key] === undefined ? (obj[key] = 1) : obj[key]++;
    // // }
    var flag = false;
    for (key of arr) {
      if (obj[key]) {
        flag = true;
      }
      obj[key] = 1;
    }
    //console.log(obj);

    console.log(flag ? "YES" : "NO");
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    62
    744 920 354 215 519 429 521 509 190 280 24 374 189 479 30 696 288 835 122 829 48 991 921 239 390 510 356 559 187 430 610 115 373 310 240 502 489 604 967 332 117 292 277 242 438 24 874 236 502 779 77 567 252 765 217 447 911 668 488 361 701 272
    5
    1 1 
    3
    1 2 3
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
