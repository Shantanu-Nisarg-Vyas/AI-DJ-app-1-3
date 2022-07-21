harry = "";
peter = "";
leftwristy = "";
rightwristy = "";

function setup() {
    canvas = createCanvas(650, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload() {
    harry = loadSound("harry.mp3");
    peter = loadSound("peter.mp3");
}

function draw() {
    image(video, 0, 0, 650, 500);
}

function modelLoaded() {
    console.log("PoseNet Initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristy = results[0].pose.leftWrist.y;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("Left Wrist Y = " + leftwristy + ", Right Wrist Y = " + rightwristy);
    }
}