// Debouncing in JS

let count = 0;
const getData = () => {
  // call API to get data;
  console.log("fetching data..", count++);
};
// now we need to avoid repeated fetching after typying each charecter in input box;

const doSomeMagic = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, d);
  };
};

const betterFunction = doSomeMagic(getData, 300);
