function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    //console.log(N, arr);

    console.log(seperate(arr));
  }
}

function seperate(arr) {
  let obj = {};

  for (key of arr) {
    obj[key] ? obj[key]++ : (obj[key] = 1);
  }

  let str = "";
  for (key in obj) {
    str += `${key} `.repeat(obj[key]);
  }

  return str;
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    1
    2
    3
    2 0 1
    6
    2 0 2 1 1 1 
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
