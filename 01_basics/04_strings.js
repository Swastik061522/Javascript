const name = "Swastik"
const age = 20

// Different ways to show the output

console.log("My name is " + name + " and my age is " + age)

// Or

console.log(`My name is ${name} and my age is ${age}`)

// Both gives the same output

// ******************************************
// Strings can be used as objects as well for example

const testString = new String("Hello")    // This enables a lot of methods that can be used like mentioned below
console.log(testString.length)
console.log(testString.toUpperCase())

// Code to convert a string into an array based on any character using split

const newString = "Hey how are you?"
console.log(newString.split(" "));
