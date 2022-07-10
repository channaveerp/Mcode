let a = [17, 28, 30];
let b = [99, 16, 8];

function compareTriplets(a, b) {
  // Write your code here
  // a= a.trim().split(" ").map(Number)
  // b= b.trim().split(" ").map(Number)
  let a_points = 0;
  let b_points = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = i; j <= i; j++) {
      if (a[i] > b[j]) {
        a_points += 1;
        break;
      } else if (a[i] < b[j]) {
        b_points += 1;
        break;
      }
    }
  }
  return [a_points, b_points].join(" ");
}
//console.log(compareTriplets(a, b));

let bag = "aabbc";
let str = "abc";

let obj = {};
for (var key of bag) {
  if (obj[key]) {
    obj[key]++;
  } else {
    obj[key] = 1;
  }
}

var flag = true;

for (let i = 0; i < str.length; i++) {
  if (!obj[str[i]]) {
    flag = false;
  }
}

if (flag) {
  console.log("Yes");
} else {
  console.log("No");
}

//console.log(obj, obj1);

let input = "a11472o5t69854";

function processData(input) {
  //Enter your code here

  let obj = {};
  //     for(let i = 0; i < input.length; i++){
  //         let temp = input[i]
  //         obj[temp] = (obj[temp] || 0) + 1
  //     }
  //     console.log(obj)

  //     let ans = [];

  //     for(let i = 0; i < 10; i++){
  //         i = i.toString();

  //         obj[i] ? ans.push(obj[i]) : ans.push("0")
  //     }

  //     return ans.join(" ")

  for (let i = 0; i < input.length; i++) {
    obj[input[i]] ? obj[input[i]]++ : (obj[input[i]] = 1);
  }
  let ans = [];
  for (let i = 0; i < 10; i++) {
    obj[i] ? ans.push(obj[i]) : ans.push(0);
  }

  return ans.join(" ");
}

//console.log(processData(input));

////console.log([] === true);

// (function test() {
//   var a = 1;
//   function test() {
//     if (!a) {
//       var a = 10;
//     }
//     console.log(a);
//   }
//   test();
//   console.log(a);
// })();

// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//   }
//   console.log(x);
//   console.log(y);
// })();

// let value = "sigma";

// if (true) {
//   var valueNumber2 = "Beta";
//   value = "Gamma";
//   console.log(value);
//   console.log(valueNumber2);
// }

// console.log(valueNumber2);
// console.log(value);

function mul(x) {
  return function (y) {
    return [
      x * y,
      function (z) {
        return x * y + z;
      },
    ];
  };
}

console.log(mul(4)(5)[0]);
console.log(mul(4)(5)[1](6));
