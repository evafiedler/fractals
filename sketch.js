let y = 200;
let down = true;

let x = 200;
let right = true;

let r = 0;
let g = 0;
let b = 0;

let opt = "";
let fr;

let cu = true;
let su = true;
let d = 1;

function setup(){
  createCanvas(600, 600);
  opt = document.getElementById("select").value;
  y = 200;
  down = true;
  x = 200;
  right = true;
  if(opt == "one"){
    $("#sound").attr('src',"kahoot.mp3");
  }else{
    $("#sound").attr('src',"tiger.mp3");
  }
}

function draw(){
  if(opt == "one"){
    vertical();
  }else if(opt == "two"){
    horizontal();
  }
}

function drawCircle(x, y, d){
  ellipse(x, y, d);
  if(d > 2){
    let newD = d / 2;
    drawCircle(x + newD, y, newD);
    drawCircle(x - newD, y, newD);
  }
}

function vertical(){
  background(r, g, b);
  stroke(255);
  noFill();
  drawCircle(300, y, 600);
  if(down){
    y += 4;
    if(y == 400){
      down = false;
      if(cu){
        r += 10;
        g += 5;
        b += 1;
        if(r > 255){
          cu = false;
        }
      }else{
        r -= 10;
        g -= 5;
        b -= 1;
        if(r <= 0){
          cu = true;
        }
      }
    }
  }else{
    y -= 4;
    if(y == 200){
      down = true;
      if(cu){
        r += 10;
        g += 5;
        b += 1;
        if(r > 255){
          cu = false;
        }
      }else{
        r -= 10;
        g -= 5;
        b -= 1;
        if(r <= 0){
          cu = true;
        }
      }
    }

  }
}

function horizontal(){
  background(0);
  stroke(255);
  noFill();
  drawCircle(x, 300, 600);
  if(right){
    x += d;
    if(x >= 400){
      right = false;
      if(su){
        d += 1;
        if(d > 10){
          su = false;
        }
      }else{
        d -= 0.5;
        if(d == 1){
          su = true;
        }
      }
    }
  }else{
    x -= d;
    if(x <= 200){
      right = true;
      if(su){
        d += 0.5;
        if(d > 10){
          su = false;
        }
      }else{
        d -= 0.5;
        if(d == 1){
          su = true;
        }
      }
    }
  }
}
