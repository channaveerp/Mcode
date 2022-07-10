// https://oj.masaischool.com/contest/1676/problem/4

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let str = input[0].trim();

  //console.log(str);
  console.log(covidVowel(str));
}

function covidVowel(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let subStr = "";
    for (let j = i; j < str.length; j++) {
      subStr += str[j];
      //console.log(subStr);
      let v_a = false;
      let v_i = false;
      let v_o = false;
      let v_u = false;
      for (let k = 0; k < subStr.length; k++) {
        subStr[k] == "a"
          ? (v_a = true)
          : subStr[k] == "i"
          ? (v_i = true)
          : subStr[k] == "o"
          ? (v_o = true)
          : subStr[k] == "u"
          ? (v_u = true)
          : false;
      }
      if (v_a && v_i && v_o && v_u) count++;
    }
  }
  return count;
}

/*
let numberOfSubstrings = (str) => {
  let count = 0;
  let vowels = { a: 0, u: 0, i: 0, o: 0 };
  let low = 0;
  let high = -1;
  while (high < str.length) {
    if (vowels.a === 0 || vowels.i === 0 || vowels.o === 0 || vowels.u === 0) {
      high += 1;
      vowels[str[high]] += 1;
    } else {
      count += str.length - high;
      vowels[str[low]] -= 1;
      low += 1;
    }
  }
  console.log(count);
};
*/

if (process.env.USERNAME === "dell") {
  runProgram(`
    dangerouscovid 
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
