// Currying.

// this can be done by using bind and closures

// let multyply = function (x, y) {
//   console.log(x * y);
// };

//let multyplybyTwo = multyply.bind(this, 2); // 2 will sit as x
// or
/*
let multyplybyTwo = function (y) {
  let x = 2;
  console.log(x * y);
};
*/
//multyplybyTwo(3);

//let multyplybyThree = multyply.bind(this, 3);
//multyplybyThree(3);

/*
or 
let multyplybyThree = multyply.bind(this);
multyplybyThree(3 * 3);

both are same but intetionally we follow above method to take use of closure
*/

let multyply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multyplybyTwo = multyply(2);
//multyplybyTwo(3);

function sumA(a) {
  return function (b) {
    console.log(a + b);
  };
}

//sumA(2)(3);

function sumB(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

var A = sumB(5);
var B = A(5);
var C = B(6);
var D = C(6);

console.log(D);

let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

//console.log(sum(2)(3)(9)());
