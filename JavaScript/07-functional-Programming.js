var currencyOne = 100
var currencyTwo = 0
var exchangeRate = 1.2

function currencyExchnage(amount,rate){
  return amount * rate
}

currencyTwo = currencyExchnage(currencyOne,exchangeRate)
console.log(currencyTwo)





function example(){
  console.log('line one')
  console.log('line two')
  console.log('line three')
}

example()


// recursion

let counter = 3

function example2(){
  console.log(counter)
  counter = counter -1
  if(counter === 0) return;
  example2()
}
example2()


// Scope

var globalVar = "I'm in Global scope"