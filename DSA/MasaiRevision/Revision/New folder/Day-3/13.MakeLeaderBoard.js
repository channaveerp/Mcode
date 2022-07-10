//https://oj.masaischool.com/contest/1677/problem/13

function runProgram(input) {
  // TC = O(n2)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  input.shift();

  let data = input.map((el) => {
    let [name, marks] = el.trim().split(" ");

    return { name, marks: Number(marks) };
  });

  //console.log(data);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j].marks < data[j + 1].marks) {
        var temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      } else if (data[j].marks == data[j + 1].marks) {
        if (data[j].name > data[j + 1].name) {
          var temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }
  }
  //console.log(data);
  let rank = 1;

  data.forEach((el, ind) => {
    if (ind === 0) {
      console.log(`${rank} ${el.name}`);
    } else if (el.marks == data[ind - 1].marks) {
      console.log(`${rank} ${el.name}`);
    } else {
      rank = ind + 1;
      console.log(`${rank} ${el.name}`);
    }
  });
}
/*
function runProgram(input) {
    input = input.trim().split(/[\n\r]+/);
  
    input.shift();
  
    let data = input.map((item) => {
      let [name, marks] = item.trim().split(" ");
  
      return { name: name, marks: Number(marks) };
    });
  
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j + 1].marks > data[j].marks) {
          var temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        } else if (data[j + 1].marks == data[j].marks) {
          if (data[j + 1].name < data[j].name) {
            var temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
          }
        }
      }
    }
    //console.log(data);
    var rank = 1;
    data.forEach((item, ind) => {
      if (ind == 0) {
        console.log(`${rank} ${item.name}`);
      } else if (item.marks == data[ind - 1].marks) {
        console.log(`${rank} ${item.name}`);
      } else {
        rank = ind + 1;
        console.log(`${rank} ${item.name}`);
      }
    });
  }
  */

if (process.env.USERNAME === "dell") {
  runProgram(`
  6
  rancho 45
  chatur 32
  raju 30
  farhan 28
  virus 32
  joy 45
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
