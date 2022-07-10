/*let name = {
  name: "Mangesh",
  lname: "landge",
  printName: function () {
    console.log(this.name + " " + this.lname);
  },
};

name.printName();
let name2 = {
  name: "sachin",
  lname: "Tendulkar",
};
// function borrowing
name.printName.call(name2);*/

let name = {
  name: "Mangesh",
  lname: "landge",
};
let printName = function (hometown, state) {
  //console.log(this.name + " " + this.lname + " " + hometown + " " + state);
  console.log("this", this);
};
printName.call(name, "Bidar", "Karnataka");

let name2 = {
  name: "sachin",
  lname: "Tendulkar",
};
// function borrowing

//printName.call(name2, "Bidar1", "Karnataka");

//printName.apply(name2, ["Bidar2", "Karnataka"]);
// in apply we difne arguments in seperate array
let data = printName.bind(name2, "Mumbai", "Karnataka");
//console.log(data);
data(); // by bind we can envoke data at any place.
