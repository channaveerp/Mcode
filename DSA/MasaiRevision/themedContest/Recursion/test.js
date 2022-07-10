/*
let arr = [[[[[[[[[[5, 6, 7]]]]]]]]]];
console.log(arrValue(arr));
function arrValue(arr) {
  if (typeof arr[0] != "object") {
    return arr;
  } else {
    return arrValue(arr[0]);
  }
}
*/
let obj = {
  a: { b: { c: { d: { e: { f: { g: { x: { y: "z" } }, i: { a: "m" } } } } } } },
};
//console.log(getObjet(obj));

function getObjet(obj) {
  //let obj1 = {};
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      return getObjet(obj[key]);
    }
    //console.log(obj[key]);
    //obj1[key] = obj[key];
  }
  return obj;
  //   console.log(obj);
}

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let arr = [[[[[[[[[[5, 6, 7]]]]]]]]]];

Array.isArray(arr);

//console.log(sum(5)(6)(7));

// let A = sum(5);
// let B = A(6);
// let C = B(7);
// console.log(C);

// let arr1 = [5, 6];
// console.log(typeof arr1[1]);
