//https://oj.masaischool.com/contest/1677/problem/06

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +input[line++];

    //console.log(N);
    //console.log(checkPrime(N) ? "Yes" : "No");
    //console.log(isPrime(N) ? "Yes" : "No");
    printAllPrime(N);
  }
}

function checkPrime(num) {
  let count = 0;
  if (num == 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count < 1 ? true : false;
}

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function printAllPrime(num) {
  for (let i = 0; i < num; i++) {
    let count = 0;
    for (let j = 0; j < num; j++) {
      if (i % j == 0) count++;
    }
    if (count == 2) console.log(i);
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    1
    10
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
