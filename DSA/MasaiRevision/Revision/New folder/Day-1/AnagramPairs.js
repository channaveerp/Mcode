//https://oj.masaischool.com/contest/1664/problem/4

function runProgram(input) {
  // TC = O(nlogn)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let N = +input[line++];
    let count = 0;
    let arr = [];
    for (let x = 0; x < N; x++) {
      let temp = input[line++].trim().split("").sort().join("");
      arr.push(temp);
    }

    // for (let i = 0; i < arr.length; i++) {
    //   for (let j = i + 1; j < arr.length; j++) {
    //     if (arr[i] == arr[j]) {
    //       count++;
    //     }
    //   }
    // }

    let i = 0;
    let j = i + 1;

    while (j < arr.length) {
      if (arr[i] == arr[j]) {
        count++;
        j++;
      }
      if (arr[i] != arr[j]) {
        i++;
      }
    }
    //console.log(arr);
    console.log(count);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    5
    aaaaabbbbb
    baabbbbaaa
    aaaabbbbba
    xxxxxxxxxy
    yxxxxxxxxx
    2
    abcdefghij
    jighdefabc 
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
