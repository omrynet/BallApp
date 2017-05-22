var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#0095DD";
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight * 0.9;
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var timer = 0;
var Counter = 0;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        ctx.fillStyle = getRandomColor();
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        ctx.fillStyle = getRandomColor();
    }

    x += dx;
    y += dy;
}

timer = setInterval(draw, 10);

function counter(){
  Counter++;
  document.getElementById("Counter").innerHTML = Counter;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    counter();
    return color;
}



// bind event handler to clear button
document.getElementById('clear').addEventListener('click', function() {
resetGame();
}, false);


function resetGame(){
  clearInterval(timer);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x = canvas.width/2;
  y = canvas.height-30;
  Counter = 0;
  document.getElementById("Counter").innerHTML = Counter;
  timer = setInterval(draw, 10);
}
