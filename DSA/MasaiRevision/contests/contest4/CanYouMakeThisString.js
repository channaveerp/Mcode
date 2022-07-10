// Can you make this string?
// Description

// You are given 2 strings, X and Y. You need to make the string Y with help of the string X.

// You are only allowed to add string X as a whole string.

// For example:-

// X => acd

// Y in step 0 is ""

// Step 1:- You can create the following string after step 0:-  "acd"

// Step 2:- You can create following string after step 1("acd"):-  "aacdcd", "acacdd", "acdacd"

// "acd" => "acd" + "acd => "acdacd"

// "acd" => 'a' + "acd" + "cd" => "aacdcd"

// "acd" => "ac" + "acd" + 'd' => "acacdd"

// Step 3:- You can create following string after step 2 if you make "aacdcd" in step 2:-  "acdaacdcd",  "aacdacdcd",  "aaacdcdcd", "aacacddcd", "aacdacdcd", "aacdcacdd" , "aacdcdacd"

// Step 3:- You can create following string after step 2 if you make "acacdd" in step 2:-  "acdacacdd",  "aacdcacdd",  "acacdacdd", "acaacdcdd", "acacacddd", "acacdacdd" , "acacddacd"

// Step 3:- You can create following string after step 2 if you make "acdacd" in step 2:-  "acdacdacd",  "aacdcdacd",  "acacddacd", "acdacdacd", "acdaacdcd", "acdacacdd" , "acdacdacd"

// ... and so on.

// You need to find out if it possible to make Y with help of X.

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let test = input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let strX = input[line++].trim();
    let strY = input[line++].trim();

    let obj1 = {};

    for (key of strX) {
      obj1[key] ? obj1[key]++ : (obj1[key] = 1);
    }

    let flag = true;
    for (let i = 0; i < strY.length; i++) {
      if (!obj1[strY[i]]) {
        flag = false;
        break;
      }
    }

    console.log(flag ? "Yes" : "No");
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    abc
    cab
    abcdef
    abcdef
    abcxyz
    abcxyababcxyzcxyzzabcxyz
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
 const tests=input[0]
    
  let line=1
    for(let i=0;i<tests;i++){
        let str1= input[line++]
        let str2= input[line++]
        let obj={}
        for (let j = 0; j < str1.length; j++) {
            obj[str1[j]]=str1[j]
            
        }
        let flag=0
        for (let j = 0; j < str2.length; j++) {
            
            if(obj[str2[j]]){
                flag++
            }else{
                flag--
            }
        }

     
        if(flag==str2.length){
            console.log("Yes");
        }else{
            console.log("No");
        }
    }

*/

// function runProgram(input) {
//     input = input.trim().split("\n");
//     const len = +input[0].trim();
//     const arr = [];
//     let row = 1;
//     for (let i = 0; i < len * 2; i++) {
//       const str = input[row++].trim();
//       arr.push(str);
//     }
//     for (let i = 0; i < arr.length; i += 2) {
//       const str = arr[i + 1].split("").sort().join("");
//       let newStr = "";
//       for (let j = 0; j < str.length; j++) {
//         if (str[j] != str[j + 1]) {
//           newStr += str[j];
//         }
//       }
//       if (arr[i].split("").sort().join("") == newStr.split("").sort().join("")) {
//         console.log("Yes");
//       } else {
//         console.log("No");
//       }
//     }
//   }
