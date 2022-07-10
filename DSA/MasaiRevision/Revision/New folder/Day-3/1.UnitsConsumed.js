//https://oj.masaischool.com/contest/1677/problem/01

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  //0-50 = 3 && max price will be 150;
  //51-150 = 5; && max price will be 650;
  //above 150 = 10; && max price will be above 650; 50 *3 + 100 * 5


  // 660;
  //50*3==> 660-50*3 = 510
  //51 to 150 ==> 100 ==> 100*5 = 500
  // 150+500 = 650;
  // 660 - 150-500 = 10;
  // above 150 , 10; 10/10 = 1
  // 150 ==> 50, 500==> 100, 10==> 1
  let cost = +input[0];
  let initial = 80;
  let net_cost = cost - initial;
  let unit = 0;

  if (net_cost <= 150) {
    unit += net_cost / 3;
  } else if (net_cost > 150 && net_cost <= 650) {
    unit += 50 + (net_cost - 150) / 5;
  } else if (net_cost > 650) {
    unit += 50 + 100 + (net_cost - 650) / 10;
  }
  console.log(unit);
}

/*
reverse solution
  let unit = 170;
  let price = 80;

  if (unit <= 50) {
    price += unit * 3;
  } else if (unit > 50 && unit <= 150) {
    price += 150 + (unit - 50) * 5;
  } else if (unit > 150) {
    price += 150 + 500 + (unit - 150) * 10;
  }
  console.log(price);
*/

if (process.env.USERNAME === "dell") {
  runProgram(`
930
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
