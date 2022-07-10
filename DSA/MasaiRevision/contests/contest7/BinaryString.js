// Binary string
// Description

// You are given a binary string of length N consisting of 0’s and 1’s. You can remove a substring “01” to gain  C0 coins and a substring “10” to gain C1 coins. After removing a substring the string will be divided into two parts and these two parts will get attach to each other to form one complete string.

// For example in string “11011” after removing “10” from string the two parts will be “1” and “11” now they will form one complete string as “111”.

// What is the maximum number of coins you can get by removing substrings?

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N, C0, C1] = input[0].trim().split(" ").map(Number);
  let str = input[1].trim();

  //console.log(N, C0, C1);
  //console.log(str);
}

function binaryStr(str, len, coin0, coin1) {
    let coin0Val = 0;
    let coin1Val = 0;
    for (let i = 0; i < len - 1; i++) {
      if (str[i] + str[i + 1] == "10") {
        coin1Val += coin1;
      }
      if (str[i] + str[i + 1] == "01") {
        coin0Val += coin0;
      }
    }
    return coin0Val > coin1Val ? coin0Val : coin1Val;
  }
  

/*
4 20 7
0001

output = 20
*/
if (process.env.USERNAME === "dell") {
  runProgram(`
    4 2 2
    1010
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
