//Throttling in JS
// use for performance optimization or rate limiting;

//run function after 100 of clicking

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    let context = this;
    argus = arguments;
    if (flag) {
      func.apply(context, argus);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

// this is albert 
function throttle(fn, wait) {
    let lastCall = 0;
  
    return function () {
      // present time, last call time was made
      if (Date.now() - lastCall > wait) {
        lastCall = Date.now();
        fn.apply(this, arguments);
      }
    };
  }