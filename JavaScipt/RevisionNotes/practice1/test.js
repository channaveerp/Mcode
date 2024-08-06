function outer() {
  const val = 10;
  function inner() {
    console.log("val is ", val);
  }
  return inner;
}

outer()();
