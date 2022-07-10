// Is it Solvable?
// Description

// You with your friend enter a game in a recent Halloween Fair. The basic motive of the game is that you have to navigate a car in its parking spot using only forward and reverse motions. So the game setter will give you 3 numbers (p,q,r) and both of you have to choose a number each. As I mentioned the car can move only in forward and reverse directions, the forward distance will be represented by a positive number and the reverse with a negative number. For the first number, it will be multiplied by the number you choose, and the car will move accordingly in the forward or reverse direction from an initial starting point. Then the second number will be multiplied by the number your friend chooses and the car will move accordingly. Your basic aim is to choose a set of numbers such that the car gets parked at a distance r from the initial point.
// Now you are a little skeptical that the game setter is biased and is giving you equations that cannot be solved. You want to find that is there a set of numbers that will take your car to the desired distance r.

function runProgram(input) {
  // TE = O(1)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);

  let test = +input[0];

  for (let x = 0, line = 1; x < test; x++) {
    let [P, Q, R] = input[line++].trim().split(" ").map(Number);
    if (P + Q == R) {
      console.log("YES");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    3 6 9
    3 6 5
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

/**function runProgram(input) {
    var inp = input.trim().split("\n");
    var test = +inp[0].trim();
    for(var t=0,line=1;t<test;t++){
        let [p,q,r] = inp[line++].trim().split(" ").map(Number);
//        console.log(p,q,r);
        var flag = false;
        for(let i=0;i<r;i++){
            for(let j=0;j<r;j++){
                if(p*i+q*j==r){
                    console.log("yes");
                    flag=true;
                    break;
                }
            }
            if(flag==true){
                break
            }
        }
        if(flag==false){
            console.log("No");
        }
    }
}
    if (process.env.USERNAME === "Afzal") {
    runProgram(`3
    3 6 9
    3 6 5
    4 7 17`);
    } else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/,"")
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/,"")
        runProgram(read);
        process.exit(0);
    })
} */
