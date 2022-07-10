//https://oj.masaischool.com/contest/1529/problem/2

// Use Side Lane
// Description

// There are N trucks numbered from 1 to N. The trucks are coming on a road in a random manner.(by random, it means that any order of number: not sorted) There is a side lane which can be used to order the sequence of truck properly(1,2,3,..N)

// Use these (Ref :https://imgur.com/a/yWLhQiK) images for better understanding of sample test case.

// If it is possible to achieve using the side land, print "yes"

// else print "no"

function runProgram(input) {
  // TE = O(1)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);

  let line = 0;
  while (Number(input[line]) !== 0) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    //console.log(N, arr);

    let lane = [];
    let order = [];

    for (let i = 0; i < N; i++) {
      if (arr[i] == 1) {
        order.push(arr[i]);
      } else {
        if (arr[i] == order[order.length - 1] + 1) {
          order.push(arr[i]);
        } else {
          lane.push(arr[i]);
        }
      }

      while (
        lane.length !== 0 &&
        lane[lane.length - 1] == order[order.length - 1] + 1
      ) {
        order.push(lane.pop());
      }
    }

    //console.log("lane- ", lane, "\n", "order- ", order);

    console.log(lane.length == 0 ? "yes" : "no");
  }
}
if (process.env.USERNAME === "dell") {
  runProgram(`
  5
  4 1 5 3 2 
  0
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

// test case 4 1 5 3 2

/**
 * 
 * lane= [4, 5]
 * order = [1, 2, 3 ]
 *2 3 5 1 4
 * 4 into side lane
 * 1 into ans
 * 5 into side lane
 * 3 into side lane
 * 2 into ans
 * pop 3 and add after 2, now remains 4 5;
 * it needs 4 in top that's why answer is wrong;
 *
 */

// test case 3 1 2 5 4

/**
 * 4 5 2 1 3
 * 3 into side lane
 * 1 into ans
 * 2 into ans
 * take 3 from side and add it into ans
 * 5 into side lane
 * 4 into ans
 * 5 into ans
 */
