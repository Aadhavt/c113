function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.hide()
    canvas = createCanvas(600,600);
    canvas.center();
    tint_color = "";
}
function draw(){
    image(video, 150, 150, 300, 300);
    tint(tint_color);
    fill(255,0,0);
    stroke(255,0,0);
    circle(10,10,50);
    circle(590,10,50);
    circle(10,590,50);
    circle(590,590,50);
    fill(0,255,0);
    stroke(0,255,0);
    rect(30,10,540,20);  
    rect(30,10,20,540);
    rect(30,560,540,20);
    rect(570,10,20,540);
}
function apply_filter(){
    tint_color = document.getElementById("color_name").value;

}
function take_snapshot(){
    save("filter_photo.png");
}