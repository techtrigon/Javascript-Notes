// Shape - superclass
function Shape () {
  this.x = 0;
  this.y = 0;
  console.log ('Shape constructor called');
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info ('Shape moved.');
};

// Rectangle - subclass
function Rectangle () {
  Shape.call (this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create (Shape.prototype, {
  constructor: {
    value: Rectangle,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

const rect = new Rectangle ();

console.log ('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log ('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move (1, 1); // Logs 'Shape moved.'
rect.move (1, 3); // Logs 'Shape moved.'
console.log (rect);
console.log (rect.constructor);

// Object creation without using new keyword and returning object ---------------------------------
function createuser (name, age) {
  const user = Object.create (createuser.__proto__);
  user.name = name;
  user.age = age;
  return user;
}
createuser.__proto__.about = function () {
  console.log (`this.name = ${this.name} and this.age = ${this.age}`);
};

const u1 = createuser ('Dev', 23);
const u2 = createuser ('Sam', 12);

// Check if the prototypes are the same
console.log (Object.getPrototypeOf (u1) === Object.getPrototypeOf (u2)); // Output: true

console.log (u1.about === u2.about);
u1.about ();
u1.__proto__.x = 2;
console.log (
  `u1 prototype is = ${u1.__proto__} and createuser prototype is = ${createuser.__proto__}`
);
console.log (createuser.__proto__);

// Object creation using new keyword -------------------------------------

//       Constuctor function below
function createuser1 (name, age) {
  this.name = name;
  this.age = age;
}

createuser1.prototype.score = function (sc) {
  console.log (`${this.name} is of age ${this.age} and score is ${sc} `);
};

const a1 = new createuser1 ('Dev', 23);
a1.score (24);
console.log (a1);
