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
