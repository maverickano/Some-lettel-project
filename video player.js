const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//play&pause Video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//update Play/Pause icon
function updatePlayIcon(){
 if(video.paused){
     play.innerHTML= '<i class="fa fa-play fa-2x"></i>'
 }else{
    play.innerHTML= '<i class="fa fa-pause fa-2x"></i>'
 }
}
// update progress & Timestamp
function updateProgress(){
   progress.value = (video.currentTime / video.duration) * 100;

   //Get minutes
   let mins = Math.floor(video.currentTime / 60);
   if(mins < 10) {
    mins = '0' + String(mins);
   }

   //Get secs
   let secs = Math.floor(video.currentTime % 60)
   if(secs < 10) {
       sec = '0' + String(secs);
   }

   timestamp.innerHTML = `${mins}:${secs}`;
}

 //set video Time to progress
 function setVideoProgress(){
     // I Add (+)Befor progress to maka sure the value is number
    video.currentTime = (+progress.value * video.duration) / 100;
 }

 // Stop the Video
 function stopVideo(){
    video.currentTime = 0;
    video.pause();
 }

//Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);

