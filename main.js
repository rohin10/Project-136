status1="";
function preload(){

}
function setup(){
    canvas = createCanvas(480,381);
    canvas.position(500,140);
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
    object_name = document.getElementById("input1").value;
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
}
function draw(){
    image(video,0,0,480,380);
}