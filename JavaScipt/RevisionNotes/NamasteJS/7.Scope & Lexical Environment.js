// scope chain, scope and Lexical Environment

// scope in JS is directly related to Lexical environment

//Lexical environment
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
//console.log(b); // RferenceError
/*
Whenever execution context is created Lexical environment also created.
Lexical environment is a local memory along with the Lexical environment of it's parent.
Lexical is term means herarkey or in sequence or as per above code fun C is lexically inside the function A
 */
// finding value step by step for above function than it become under scope chain.
