// if else
var result = 50

if(result>40){
  console.log('You passed the Test')
}else{
  console.log('You Failed the Test')
}


// if,else if, else
var place = 'first'

if(place==='first'){
  console.log('Gold')
}else if(place === 'second'){
  console.log('Silver')
}else if(place==='third'){
  console.log('Bronze')
}else{
  console.log('No Medal')
}



// Switch
var place = 'fourth'

switch(place){
  case 'first':
    console.log('Gold')
    break;
  case 'second':
    console.log('Silver')
    break;
  case 'third':
    console.log('Bronze')
    break;
  default:
    console.log('No medal')
    break;
}



// Exercises

// Task-1

var age = 10

if(age>=65){
  console.log('You get your income from your pension')
}else if(age<65 && age>=18){
  console.log('Each Month You get Salary')
}else if(age<18){
  console.log('You get allowance')
}else{
  console.log('The value of age varible is not numerical')
}


// Task-2
var day = 'Sunday'

switch(day){
  case 'Monday':
    console.log('Do something')
    break;
  case 'Tuesday':
    console.log('Do something')
    break;
  case 'Wednesday':
    console.log('Do something')
    break;
    case 'Thursday':
      console.log('Do something')
      break;
    case 'Friday':
      console.log('Do something')
      break;

    case 'Saturday':
      console.log('Do something')
      break;

    case 'Sunday':
      console.log('Do something')
      break;
    default:
      console.log('There is no such day')
      break;
  
}