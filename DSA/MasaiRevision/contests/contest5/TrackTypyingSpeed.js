// Track typing speed
// Description

// There is a special keyboard with all keys in a single row.

// You have given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i – j|.

// You want to type a string S. Write a program to calculate how much time it takes to type it with one finger.

// Explanation for sample input:

// ![image]()

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let order = input[0].trim();
  let string = input[1].trim();

  //console.log(order, string);

  let time = order.indexOf(string[0]);

  for (let i = 0; i < string.length - 1; i++) {
    let index = Math.abs(
      order.indexOf(string[i]) - order.indexOf(string[i + 1])
    );
    time += index;
  }

  console.log(time);
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    pqrstuvwxyzabcdefghijklmno
    hello
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
        var keyb = inp[0].trim();
    var word = inp[1].trim();
    var sum =keyb.indexOf(word[0]);

        for(let j=0;j<word.length-1;j++){
            let ind = Math.abs(keyb.indexOf(word[j])-keyb.indexOf(word[j+1]));
//            console.log(ind);
            sum+=ind
        }
        console.log(sum);*/

//function runProgram(input) {
//   // Write code here
//   input = input.trim().split("\n");

//   for (let i = 0; i < input.length; i++) {
//     input[i] = input[i].trim().split("");
//   }

//   const str1 = input[0];
//   const str2 = input[1];

//   const obj = {};

//   for (let i = 0; i < str1.length; i++) {
//     obj[str1[i]] = i;
//   }

//   let ans = 0;
//   let prev = 0;

//   for (let i = 0; i < str2.length; i++) {
//     const out = Math.abs(prev - obj[str2[i]]);
//     prev = obj[str2[i]];
//     ans += out;
//   }
//   console.log(ans);
// }
