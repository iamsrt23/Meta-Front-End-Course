// create your classes here
class Bird{
  useWings(){
      console.log('Flying')
  }
}
class Penguin extends Bird{
  useWings(){
      console.log('Unable Yo Fly')
  }
}

class Eagle extends Bird{
  useWings(){
      super.useWings()
          console.log(' Above Clouds')
      
  }
}

var goodEagle = new Eagle()
var badPenguin = new Penguin()
goodEagle.useWings()
badPenguin.useWings()



let apple = new String('apple')
console.log(apple)


class Train {
  constructor(color, lightsOn) {
      this.color = color;
      this.lightsOn = lightsOn;
  }
  toggleLights() {
      this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
      console.log('Lights on?', this.lightsOn);
  }
  getSelf() {
      console.log(this);
  }
  getPrototype() {
      var proto = Object.getPrototypeOf(this);
      console.log(proto);
  }
}

var train4 = new Train('red', false);
train4.toggleLights(); 
train4.lightsStatus(); 
train4.getSelf(); 
train4.getPrototype(); 


class HighSpeedTrain extends Train{
  constructor(passengers,highSpeedOn,color,lightsOn){
    super(color,lightsOn)
    this.passengers = passengers
    this.highSpeedOn = highSpeedOn
  }
  toggleHighSpeed(){
    this.highSpeedOn = !this.highSpeedOn
    console.log('High speed status:',this.highSpeedOn)
  }
  toggleLights(){
    super.toggleLights()
    super.lightsStatus()
    console.log('Lights are 100% operational.')
  }
  
  
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); 
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); 
train4.lightsStatus();
train4.getSelf(); 
train4.getPrototype(); 

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); 
train5.lightsStatus();
highSpeed1.toggleLights(); 



// example -2


class StationaryBike{
  constructor(position,gears){
    this.position = position
    this.gears = gears
  }

}

class Treadmill{
  constructor(position,modes){
    this.position = position
    this.modes = modes
  }

}

class Gym{
  constructor(openHrs,StationaryBikePos,TreadmillPos){
    this.openHrs = openHrs
    this.StationaryBike = new StationaryBike(StationaryBikePos,8)
    this.Treadmill =  new Treadmill(TreadmillPos,5)
  }
}

var boxingGym = new Gym('7-22','right corner','left corner')
console.log(boxingGym.openHrs)
console.log(boxingGym.StationaryBike )
console.log(boxingGym.Treadmill)