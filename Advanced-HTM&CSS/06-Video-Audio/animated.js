let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 4;
let position = 0; // Start at a valid position inside the canvas
let moveSpeed = speed;
let radius = 40;

function moveBall() {
  if (position + radius >= 640){
    moveSpeed = -moveSpeed; 
  } else if(position-radius<0){
    moveSpeed = speed

  }
  position += moveSpeed;
  }
  


function drawBall() {
  context.clearRect(0, 0, 640,480);
  context.fillStyle = '#62687f';
  context.beginPath();
  context.arc(position, 50, radius, 0, 2 * Math.PI); // Full circle
  context.fill();
}

function animate() {
  moveBall();
  drawBall();
  requestAnimationFrame(animate);
}

animate(); // Start animation loop
