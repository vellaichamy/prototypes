// Creating an empty object
var person = Object.create(null)

// person ----> null

// Adding methods
person.fullName = function () {
  return this.firstName + ' ' + this.lastName
}

// Sets person as the man's prototype
var man = Object.create(person)
man.sex = 'male'

// man ----> person ----> Object.prototype ----> null

// Sets man as the Vellai's prototype
var Vellai = Object.create(man)
Vellai.firstName = 'Vellai'
Vellai.lastName = 'Ugra'

// Vellai ----> man ----> person ----> Object.prototype ----> null

console.log(Vellai.sex)
console.log(Vellai.fullName())
