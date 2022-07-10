let arr = ["mangesh", "landge"];

let object = {
  name: "mangesh",
  city: "Bidar",
  getIntro: function () {
    console.log(`${this.name} from ${this.city}`);
  },
};
/*
arr.__proto__ == Array.__proto__ => called as array protype

arrarr.__proto__arr.__proto__ == Object.__proto__ => called object proto

object.__proto__.__proto__ => Null;

same condition will apply for function as applied for arr
fun.__proto__ == Function.__proto__ => called as function protype

fun.__proto__.__proto__  == Function.__proto__.__proto__  => called as object protype

fun.__proto__.__proto__.__proto__ => Null;

prototype chain ends with null
*/
let object2 = {
  name: "anil",
};
// Newer do this type
object2.__proto__ = object; // we can acces the properties of object properties in object2

Function.prototype.show = function () {
  console.log("Mangesh");
};
function show() {}

// example
function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function () {
  this.answer = this.sides * this.sideLength;
  console.log(this.name + "Perimeter is " + this.answer);
};

var square = new Shape("square ", 4, 5);
var triangle = new Shape("triangle ", 3, 3);

square.calcPerimeter();
triangle.calcPerimeter();

// ex=2

function Management(type, name, place, bio) {
  this.type = type;
  this.name = name;
  this.place = place;
  this.bio = bio;
}

Management.prototype.PrintData = function () {
  this.data =
    this.type +
    "name - " +
    this.name +
    "place - " +
    this.place +
    "Bio - " +
    this.bio;

  // this.test = true;
  console.log(this.data);
};

var student = new Management("Student, ", "Suresh, ", "HYD,", "busy in study");
var teacher = new Management("Teacher, ", "Arun, ", "BLR, ", "always ready");
var compitation = new Management(
  "Compitation, ",
  "Kabbadi, ",
  "Delhi, ",
  "Indian Game"
);

student.PrintData();
teacher.PrintData();
compitation.PrintData();
