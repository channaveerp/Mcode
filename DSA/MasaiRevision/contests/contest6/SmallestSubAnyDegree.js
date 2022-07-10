// Smallest Subarray having Array Degree
// Description

// Given an array A of size n.

// The degree of an array is defined as the count of the number that occurs the maximum number of times in the array.

// We need to find the length of the smallest subarray that has the same degree as that of the array.

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let test = +input[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    console.log(N, arr);
  }
}
if (process.env.USERNAME === "dell") {
  runProgram(`
    1
    13
    1 3 3 2 2 3 6 6 5 5 6 6 3      
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
    // Write code here
    input = input.trim().split('\n')
   
    for(let i=0;i<input.length;i++){
        input[i]=input[i].trim().split(" ").map(Number)
    }

const [tests]=input[0]
let line=1

for (let i = 0; i < tests; i++) {
   const [N]=input[line++]
   const arr=input[line++]
   
let ans = findShortestSubArray(arr)
let ans2= Math.min(...ans)
console.log(ans2);

}

function findShortestSubArray (nums) {
    let freqs = {};
    let degree = 0;
    nums.forEach(n => {
    
        let a= freqs[n]==undefined? 0:freqs[n] 
        freqs[n] =a + 1;
        
        degree = freqs[n] > degree ? freqs[n] : degree; 
        }
    );
    let mostCommon = Object.keys(freqs).filter(n => freqs[n] == degree);
    let sublengths = mostCommon.map(n => nums.lastIndexOf(parseInt(n)) - nums.indexOf(parseInt(n)) + 1);
    // return Math.min(... sublengths);
    return sublengths
};

}

*/

/*
function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var tests = +input[0]
    // console.log(tests);
    
    for(let t=0,line=1;t<tests;t++){
        var n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        // console.log(n,arr);
        let freqMap = {};
        let startMap = {};
        let hfreq = 0;
        let s = 0;
        let e = 0;
        let len = s - e + 1;
        for(let i=0;i<arr.length;i++){
            if(freqMap[arr[i]]){
                freqMap[arr[i]] = freqMap[arr[i]] + 1;
            }else{
                freqMap[arr[i]] = 1;
                startMap[arr[i]] = i;            
            }
            if(freqMap[arr[i]]>hfreq){
                hfreq = freqMap[arr[i]];
                s = startMap[arr[i]];
                e = i;
                len = e - s + 1;
            }else if(freqMap[arr[i]]==hfreq){
                let length = i - startMap[arr[i]] + 1;
                if(length<len){
                    hreq = freqMap[arr[i]];
                    s = startMap[arr[i]];
                    e = i;
                    len = e - s + 1;
                }
            }
        }
        console.log(len);
    }

}
*/
