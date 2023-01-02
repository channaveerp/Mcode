// sum(1)(2)(3)...(n)();

let sum = function (a) {
  return function (b) {
    return b ? sum(a + b) : a;
  };
};

console.log(sum(10)(2)(3)(4)());
