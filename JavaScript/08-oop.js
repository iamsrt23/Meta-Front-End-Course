// Functional 
var shoes = 100
var stateTax = 1.2;

function totalPrice(shoes,tax){
  return shoes* tax
}

var toPay = totalPrice(shoes,stateTax)
console.log(toPay)


// OOP 1

var purchase1 = {
  shoes:100,
  stateTax:1.2,
  totalPrice: function(){
    var calculation = purchase1.shoes * purchase1.stateTax
    console.log("Total Price:",calculation)
  }
}

purchase1.totalPrice()



// OOP2
var purchase2 = {
  shoes:50,
  stateTax:1.2,
  totalPrice: function(){
    var calculation = purchase2.shoes * purchase2.stateTax
    console.log("Total Price:",calculation)
  }
}

purchase2.totalPrice()

console.log('---------this------------')
// OOP3 this
var purchase3 = {
  shoes:1000,
  stateTax:1.2,
  totalPrice: function(){
    var calculation = this.shoes * this.stateTax
    console.log("Total Price:",calculation)
  }
}

purchase3.totalPrice()


var purchase4 = {
  shoes:500,
  stateTax:1.2,
  totalPrice: function(){
    var calculation = this.shoes * this.stateTax
    console.log("Total Price:",calculation)
  }
}

purchase4.totalPrice()



















