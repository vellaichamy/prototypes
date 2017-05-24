// Creates a constructor function
var Person = function (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// Person ----> Function.prototype ----> Object.prototype ----> null

// Sets the function's prototype property to the object that we want the new object's prototype to be
Person.prototype = {
  toString: function () {
    return this.firstName + ' ' + this.lastName
  }
}

// Person.prototype ----> Object.prototype ----> null

var Vellai = new Person('Vellai', 'Ugra')
console.log(Vellai.toString())

// Vellai ----> Person.prototype ----> Object.prototype ----> null

//  So, when you call
// var foo = new Foo()
// JavaScript actually just Ugras
// var foo  = new Object()
// foo.[[Prototype]] = Foo.prototype;
// Foo.call(foo);
