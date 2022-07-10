// let, const and temporal dead zone;

// let and const are hoisted.
console.log(b); // undefined
//console.log(a); // reference error
let a = 10; // it will initialize undefined in phase1; and stores in seperate execution context;
console.log(a);
var b = 100; // it will initialize undefined in phase1 and in phase2 100; and stores in GEC

// temporal dead zone: the time between the since let was hoisted and till it is initialize value this time is temporal dead zone.
//console.log(ans); // reference error, can't acces before initialize;

let ans = 5;
// from line 11 to line 13 is temporal deadzone. whenever we try to get values in this zone outPut will be reference error.
// when let see reDecleration then it gives SyntextError
const c = 1000; //it will initialize undefined in phase1; and stores in seperate execution context like let;
const d;
d = 10;
console.log(d) // SyntextError: missing Initializer in const declaration;

//all put declation and initializer in the  top to avoid temporal dead zone.