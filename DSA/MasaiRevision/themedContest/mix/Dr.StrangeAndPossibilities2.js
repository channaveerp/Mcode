// Dr. Strange and Possibilities II
// Description

// Dr. Strange is back again and this time he has an array A with n integers which may have duplicates. So he again uses his mind power and time stone to calculate all the possible subsets of the input array A. Generate all the possible subsets.

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = input[0];

  let arr = [];
  for (let x = 0, line = 1; x < test; x++) {
    arr.push(i);
  }
  possibilities(arr.join(""), -1, "");
}

function possibilities(string, ind, result) {
  let n = string.length;
  if (ind == n) {
    return;
  }
  console.log(result.split("").join(" "));
  for (let i = ind + 1; i < n; i++) {
    result += string[i];
    allSubSequence(string, i, result);
    result = result.substring(0, result.length - 1);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    1 2 2
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

/**function runProgram(input) {
  const n = +input.trim();
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  allSubSequence(arr.join(""), -1, "");
}

function allSubSequence(str, index, res) {
  let n = str.length;
  if (index == n) {
    return;
  }
  console.log(res.split("").join(" "));
  for (let i = index + 1; i < n; i++) {
    res += str[i];
    allSubSequence(str, i, res);
    res = res.substring(0, res.length - 1);
  }
} */
