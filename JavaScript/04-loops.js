// for Loops

// Increment
for(var i=0; i<=3; i++){
  console.log(i)
}
console.log('GO')

// Decrement
for(var i=10; i>0;i--){
  console.log(i)
}
console.log('Happy New Year')


// While Loop
var counter = 3
while(counter > 0){
  console.log(counter)
  counter -=1
}
console.log('Happy Birth day')


// Nested Loops
for(var year=2018; year<2025; year++){
  console.log(year)
  for(var month=6;month<9;month++){
    console.log("-----------",month)
  }

}


// Exercise

// Task-1

for(var i=1; i<=5;i++){
  console.log(i)
}
console.log('Counting Completed')

// Task-2
for(var i=5;i>0;i--){
  console.log(i)
}
console.log('Countdown finished')

// Task-3
var count = 1

while(count<=5){
  console.log(count)
  count +=1

}
console.log('Counting Completed')

// Task-4

var count1 = 5
while(count1>0){
  console.log(count1)
  count1 -=1
}
console.log('Count Down Finished')

// Task-5
var year = 2018

while(year<=2022){
  console.log(year)
  year +=1
}


// Task-5
for(var i=1;i<=10;i++){
    if(i===1){
        console.log('Gold Medal')
    }else if(i===2){
        console.log('Silver medal')
    }else if(i===3){
        console.log('Bronze medal')
    }else{
        console.log(i)
    }

}



// Task-6
for(var i=1;i<=10;i++){
  switch(i){
      case 1:
      console.log('Gold Medal')
      break;
      case 2:
      console.log('Silver Medal')
      break;
      case 3:
      console.log('Bronze Medal')
      break;
      default:
      console.log(i)
      

  }
}

/*
* 4
*/