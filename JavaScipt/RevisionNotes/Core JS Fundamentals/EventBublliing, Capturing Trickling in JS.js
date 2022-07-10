//EventBublliing, Capturing Trickling in JS

//example if we have nested HTML elements

/*
<div id="grandParent"> // onclick grandParent
  <div id="Parent"> // onclick Paren
    <div id="child"></div> // onclick child
  </div>
</div>;

as per above HTML 
Event bubling means if we call onClick clind then it moves to parent and then grand parent. 
like event is bubbling out from dom tree;

opposite to bubling is event capturing.
if we click on child

working flow is : grandParent ==> parent ==> child;

Tcking is also same as Capturing or another name for event Capturing.
*/
//addEventHandler ('event', callbackFunction, useCapture[true or false])
// false mease goes bublling, if true means capturing;

document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clicked");
    e.stopPropagation(); // propogation stops and then gran paren will not call when we click on child
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  false
);

//these process have performense issues;
/*
// some outputs for above addEventListener When usesCaptue is changed

false, false, false ==> bubling
true, true, true ==> cpturing or tickling
true, false, true ==> capturing,bubling, capturing ==> grandParent, child, parent // when click on child div
true, false, false ==> capturing, bubling, bubling ==> grandParent, child, parent // when click on child div
*/
