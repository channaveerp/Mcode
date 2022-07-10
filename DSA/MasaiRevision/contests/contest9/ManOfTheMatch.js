//https://oj.masaischool.com/contest/1625/problem/1

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

    manOfMatch(arr);
  }
}

function manOfMatch(arr) {
  var vk = 0;
  var abd = 0;
  var strike = 0;

  for (var i = 0; i < arr.length; i++) {
    if (strike == 0) {
      abd += arr[i];
    } else {
      vk += arr[i];
    }
    if (arr[i] == 1 || arr[i] == 3) {
      if (strike == 0) {
        strike = 1;
      } else if (strike == 1) {
        strike = 0;
      }
    }

    if ((i + 1) % 6 == 0) {
      if (strike == 0) {
        strike = 1;
      } else if (strike == 1) {
        strike = 0;
      }
    }
  }

  if (vk > abd) {
    console.log("Virat Kohli");
  } else if (abd > vk) {
    console.log("AB de Villiers");
  } else {
    console.log("Tie");
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0
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

/*
function runProgram(input) {
    input = input.trim().split(/[\r\n]+/);
    var tc = +input[0];
    var line = 0;
    for (i = 0; i < tc; i++) {
      var len = +input[++line];
      var arr = input[++line].trim().split(" ").map(Number);
      manOfMatch(arr);
    }
  }
  function manOfMatch(arr) {
    var virat = 0;
    var ab = 0;
    var strike = 0;
  
    for (var i = 0; i < arr.length; i++) {
      if (strike == 0) {
        ab += arr[i];
      } else {
        virat += arr[i];
      }
      if (arr[i] == 1 || arr[i] == 3) {
        if (strike == 0) {
          strike = 1;
        } else if (strike == 1) {
          strike = 0;
        }
      }
  
      if ((i + 1) % 6 == 0) {
        if (strike == 0) {
          strike = 1;
        } else if (strike == 1) {
          strike = 0;
        }
      }
    }
  
    if (virat > ab) {
      console.log("Virat Kohli");
    } else if (ab > virat) {
      console.log("AB de Villiers");
    } else {
      console.log("Tie");
    }
  }
  */
