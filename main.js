nosex=0
nosey=0
leftwristx=0
leftwristy=0
rightwristx=0
rightwristy=0
difference=0
function preload(){
 
}
function setup(){
    video = createCapture(VIDEO)
    video.size(500,500)
  canvas = createCanvas(500,500)
  canvas.position(600,135)
  posenet=ml5.poseNet(video,modelloaded)
  posenet.on("pose",gotposes)
}
function draw(){
background("#170da3")
fill("#219ddb")
square(nosex, nosey, difference);
document.getElementById("W&H").innerHTML = difference
}
function modelloaded(){
  console.log("modelloaded")
}
function gotposes(result){
  if (result.length>0){
    console.log(result)
    nosex=result[0].pose.nose.x
    nosey=result[0].pose.nose.y
    leftwristx=result[0].pose.leftWrist.x
    leftwristy=result[0].pose.leftWrist.y
    rightwristx=result[0].pose.rightWrist.x
    rightwristy=result[0].pose.rightWrist.y
      difference=floor(leftwristx-rightwristx)
      console.log(difference)
  }
}