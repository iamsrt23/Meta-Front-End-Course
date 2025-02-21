// console.log(a+b)
console.log("This line never reached")

try {
  throw new ReferenceError()
  
} catch (error) {
  console.log(error)
  console.log('There was an Error')
  
}
console.log('My Program is Not Stopped')



var letters = 'abc'
console.log(letters.match(/d/))

console.log("John Smith")

var noise;
console.log(noise)


// Exercises

// Task1

function addTwoNums(a,b){
  console.log(a+b)
}

// addTwoNums(a,b)

// Task2
addTwoNums(5,"5")

// Task3

try {
  function addTwoNums1(a,b){
    console.log(a+b)
  }
} catch (error) {
  console.log(error)
  console.log('This is The Error')
  
}


addTwoNums1()


// task4

function addTwoNums2(a,b){
  try {
    if(typeof(a)!='number'){
      throw new ReferenceError('the first argument is not a number')
    }else if(typeof(b) != 'number'){
      throw new ReferenceError('The Second Argument is not a number')
    }else{
      console.log(a+b)
    }

  } catch (error) {
    console.log("Error!",error)
  }
}

addTwoNums2()


// task5
function addTwoNums(a,b) {
  try {
      if(typeof(a) != 'number') {
          throw new ReferenceError('the first argument is not a number')
      } else if (typeof(b) != 'number') {
          throw new ReferenceError('the second argument is not a number')
      } else {
          console.log(a + b)
      }
  } catch(err) {
      console.log("Error!", err)
  }
}
addTwoNums(5, "5")
console.log("It still works")

// Exercise 2

function letterFinder(word, match) {
  var conditon1 = typeof(word) == 'string' && word.length >= 2
  var conditon12 = typeof(match) == 'string' && match.length == 1
  if(conditon1 && conditon2){
      for(var i = 0; i < word.length; i++) {
          if(word[i] == match) {
              //if the current character at position i in the word is equal to the match
              console.log('Found the', match, 'at', i)
          } else {
              console.log('---No match found at', i)
          }
      }
  }else{
      console.log("Please pass correct arguments to the function.")
  }
  
}

letterFinder([],[])



console.log('----------------')

var result = null
console.log(result)

try {
  console.log('hello')
} catch (error) {
  console.log('good')
}


try {
  throw new Error();
  console.log('Hello');
} catch(err) {
  console.log('Goodbye');
}