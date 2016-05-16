// function add (a, b) {
//   return a + b ;
// }
//
// console.log(add(3,1));
//
//  var toAdd = [9, 5];
//  console.log(add(...toAdd));

var person = ["Andrew", 25];
var personTwo = ["jen", 29];

function greet(name, age){
  console.log("Heello " + name + " "  + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andres', ...names];

final.forEach(function(name){
  console.log(name);
});
