// Functions

function letterFinder(word,match){
  for(var i=0; i<word.length;i++){
    if(word[i]=== match){
      console.log('Found Match at',i)
    }else{
      console.log('No match found at',i)
    }
  }
}

letterFinder('test','t')




// Objects Exercise

// Task-1
var clothes = []
clothes.push('T-shirt')
clothes.push('Track pant')
clothes.push('Boxer')
clothes.push('Shirt')
clothes.push('Trouser')
clothes.pop()
console.log(clothes)



var favCar = {}
favCar.color = 'red'
favCar.covertible = true
console.log(favCar)