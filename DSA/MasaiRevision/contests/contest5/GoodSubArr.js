// Good subarrays
// Description

// You are given an array of N positive integers. A subarray is the sequence of consecutive elements of the array. A subarray is called good if the starting element of the subarray is the minimum element among all the elements which that subarray covers. You need to count the number of good subarrays present in the array.

function runProgram(input) {
  // TC = O(n^2)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  //console.log(N, arr);

  let count = 0;
  for (let i = 0; i < N; i++) {
    count++;
    for (let j = i + 1; j < N; j++) {
      if (arr[i] <= arr[j]) {
        count++;
      } else {
        break;
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    3 2 1    
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

function goodSubArray(arr, len) {
  let count = 0;
  for (let i = 0; i < len; i++) {
    count++;
    for (let j = i + 1; j < len; j++) {
      if (arr[i] <= arr[j]) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}
/*
    function runProgram(input) {
      // Write code here
      input = input.trim().split('\n')
     
      for(let i=0;i<input.length;i++){
          input[i]=input[i].trim().split(" ").map(Number)
      }
  const [N]=input[0]
  const array= input[1]
  
  let subarrays=[]
  
  let sub
  for (let i = 0; i < array.length; i++) {
     
    sub=""
      for (let j = i; j < array.length; j++){
         sub=sub+array[j]+","
         
         let sb= sub.split(",").map(Number)
           sb.pop()
  
         if(Smaller(sb)){
          subarrays.push(sb)
         }
        
         
  
         
      }
      
  }
  
  function Smaller(arr){
      let small=arr[0]
  
      for (let i = 1; i < arr.length; i++) {
      
           if(arr[i]<small){
               return false
           }
      }
      return true
  }
  console.log(subarrays.length);
  
  }
  */
