// Block, Scope and Shadowing.
var a = 100;
{
  // block is also known as compound statment;
  // multiple JS statements into one group.
  // group of multiple statements where JS expects a single statement.
  var a = 10; // moves to global object and save undefined in phase1;
  let b = 20; // saves in blockScope
  const c = 30; // saves in blockScope

  console.log(a); // 10
}

console.log(a); // 10

// Shadowing: if we have same varialbe outside the block than shadowing happens; {a=10 changes value of a =100 to a=10}
