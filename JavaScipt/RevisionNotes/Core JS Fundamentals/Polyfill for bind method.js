// Polyfill for bind method.

// Polyfill is a browser fallback (If browser is not supports bind method) we need to write our own bind method.

let name = {
  fname: "Mangesh",
  lname: "Landge",
};
/*
let printName = function () {
  console.log(this.fname + " " + this.lname);
};

let printMyName = printName.bind(name);
printMyName();

Function.prototype.mybind = function (...args) {
  let obj = this;
  return function () {
    obj.call(args[0]);
  };
};

let printMyName2 = printName.mybind(name);
printMyName2();
*/

let printName = function (hometown, state, country) {
  console.log(
    this.fname + " " + this.lname + hometown + " " + state + " " + country
  );
};

let printMyName = printName.bind(name, "basavakalya", "Karnataka");
printMyName("India");

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "basavakalya", "Karnataka");
printMyName2("India");
