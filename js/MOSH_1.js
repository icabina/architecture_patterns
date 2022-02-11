/*DESIGN PATTERNS:
1. CREATIONAL*/
//================================================
//factory function
//camel notation
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const myCircle = createCircle(1);
//asi se crea un nuevo con factory function
// se retorna el object
//================================================
//Constructor function
//pascal notation
function Circle(radius) {
  //this is empty object
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(1);
// points this to circle

//================================================
// 2. STRUCTURAL
// 3. BEHAVIOURAL
