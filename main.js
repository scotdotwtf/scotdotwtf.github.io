var song = document.getElementById("song"); 
var video = document.getElementById("video"); 

function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("content").style.display = "block";
    song.play(); 
    video.play();
}