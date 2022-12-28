var canvas, backgroundImage;

var questions;

var question, contestant, quiz;

var backgroundImage;


function preload() {
  
  backgroundImage= loadImage("bg.jpg")
}


function setup(){
  canvas = createCanvas(windowWidth-20,windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background(0);
  background(backgroundImage);

}
