// https://oj.masaischool.com/contest/1563/problem/D1-1

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    console.log(MajarotyElement(arr));
  }
}

//sorting
function MajarotyElement(arr) {
  arr.sort((a, b) => a - b);

  if (arr.length == 1) {
    return arr[0];
  }
  for (let i = 0; i < Math.floor(arr.length / 2) + 1; i++) {
    if (arr[i] === arr[i + Math.floor(arr.length / 2)]) {
      return arr[i];
    }
  }

  return -1;
}

/*
//bruteForce
function MajarotyElement(arr) {
  let N = arr.length;
  let max_count = 0;
  let ind = -1;
  for (let i = 0; i < N - 1; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }

    if (count > max_count) {
      max_count = count;
      ind = i;
    }
  }
  if (N == 1) {
    return arr[0];
  }

  return max_count > N / 2 ? arr[ind] : -1;
}
*/

if (process.env.USERNAME === "dell") {
  runProgram(`
  5
6
2 1 1 1 1 3
5
1 1 2 2 3
4
1 8 8 8 
1
9
3
7 7 9
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
