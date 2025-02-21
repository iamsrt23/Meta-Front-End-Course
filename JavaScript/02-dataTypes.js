// Primitive DataTypes

/*
String
Number
Boolean
Null
Undefined
BigInt
Symbol
*/
// Strings

console.log('Hello There 123')
console.log( "It's a Lovely day")

// Number
console.log(10**2)
console.log(9%8)
console.log(16%8)
console.log(2*4+8)
console.log(2*(4+8))

// Booleans
console.log(1<2)
console.log(1>2)
console.log(1==2)
console.log(100=='100') // Checks only value ignore Type
console.log(100==='100') // Checks value and Type
console.log(1 != '1')
console.log(1 !== '1')
// Arithemetic Operators --> + , -. / . *

console.log(2+2)
console.log(1+2+3+4+5)
console.log(20-18)
console.log(2*3)
console.log(8/1)

// Comparison Operators --> ===,>,<,>=,<=,!==
console.log(2>3)
console.log(3>2)
console.log(10==10)


// logical Operators ---> And, Or, not





// Exercises
// Task-1
var score = 8
console.log("Mid-level skills:", score > 0 && score <10)

// Task-2
var timeRemaining = 0
var energy = 10
console.log('Game Over: ', timeRemaining == 0 || energy== 0)


// Task-3
var num1 = 2
var num2 = 5
var test1 = num1 % 2 
var test2 = num2 % 2
var result1 =  test1 == 0
var result2 = test2 == 0

console.log("Is",num1,"an even number?",result1)
console.log("Is",num2,"an even number?",result2)


// Task-4
console.log(5+10)

// Task-5
var now = "Now in "
var three = 3
var d  = "D!"
console.log(now+three+d)