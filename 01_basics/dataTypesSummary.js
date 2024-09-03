// There are mainly two types of dataTypes in JavaScript

// 1. Primitive DataTypes ==> String, number, boolean, BigInt, Symbol, null, undefined
// 2. Non-Primitive DataTypes / Reference DataTypes ==> Object, Function, Array

// Primitive datatypes store call by value
let name = "Swastik"
let newName = "Charchit"

name = newName

name = "Ozone"
// console.log(name)
// console.log(newName)

// Non-Primitive datatypes store call by reference

let userOne = {
    email : "abc@gmail.com",
    password: "hello123"
}

let userTwo = userOne

userTwo.email = "cde@gmail.com"
console.log(userOne.email)       // Prints cde@gmail.com because both userOne and userTwo are pointing to same value

// Therefore, if some changes are made in userOne, then it will affect userTwo as well. This is called call by reference


// Primitive datatypes are stored in stack memory and non-primtive datatypes are stored in heap memory