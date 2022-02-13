/*DESIGN PATTERNS:
1. CREATIONAL*/

//================================================
//factory function, using return OBJECT
//camel notation
function createCircle(radius) {
  return {
    //returns an object
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const myCircle = createCircle(1);
console.log(myCircle);
//asi se crea un nuevo objeto con factory function
// se retorna el object
//================================================
//Constructor function, using this, and NEW
//pascal notation
function Circle(radius) {
  //this is empty object
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(7);
console.log(circle);
// points this to circle

//================================================
// 2. STRUCTURAL
// 3. BEHAVIOURAL
