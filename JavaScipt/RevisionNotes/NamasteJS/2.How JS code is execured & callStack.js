// Everything in JS happens inside an Execution Context

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var sqaure2 = square(n);
var square4 = square(4);
// how this code executes==>
/*
// 1st phase creation 
MEMORY                                                             CODE
n:undefined //stores                                                                
square:{store whole code of function}
square2: undefined;
square4: undefined;


// 2nd phase
MEMORY                                                             CODE
n:2                                                                
square:{store whole code of function}
square2: undefined;    ------------------------------------- again function invokes and follows phase1 and phase2 refer below
square4: undefined;
 

after invoking function square2
phase1
MEMORY                                                             CODE
num:undefined                                                              
ans:undefined


phase2
MEMORY                                                             CODE
num:2                                                           num * num
ans:4                                   after return finds value of ans and replace it with square2: 4;
last step                         after above process function called for square2 will be deleted from memory


// above 2 phses will be repeated when squre4 runs in code execution.
squre4: 16;

after completing all execution whole globle context will be deleted.
*/

// call stack to manage all execution
// **** CALL STACK MAINTAINS THE ORDER OF EXECUTION OF EXECUTION CONTEXT.

/*
initially while executing Global Execution Context will be created and then when it finds {var square2} then it will created 
Execution Context 1 and after completing this Execution Context 1 will be deleted from stack. and then for {var square4}
Execution Context 2 will be created after completing Execution Context 1 will be deleted and after this Global Execution Context
will be deleted at the end.
*/
/*
few other names for call stack
1. Execution COntext Stack
2. Program Stack
3. Control Stack
4. Runtime Stack
5. Machine Stack
*/
