console.log('Hello World!');
let songIndex = 0;
let audioElm = new Audio("/music/music1.mp3");
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar')
let infoBox = document.getElementById('infoBox')
let songs =[
  { name: 'beliver', filePath: "/music/music1.mp3" },
  { name: 'beliver', filePath: "/music/music1.mp3" },
  { name: 'beliver', filePath: "/music/music1.mp3" },
  { name: 'beliver', filePath: "/music/music1.mp3" },
  { name: 'beliver', filePath: "/music/music1.mp3" },
  { name: 'beliver', filePath: "/music/music1.mp3" },
  { name: 'beliver', filePath: "/music/music1.mp3" },
  { name: 'beliver', filePath: "/music/music1.mp3" }
   ]
   
//audioElm.play();

// for play and pause
infoBox.style.display= "none";

masterPlay.addEventListener('click', ()=>{
  if(audioElm.paused || audioElm.currentTime <= 0){
    audioElm.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    infoBox.style.display= "block";
  }
  else{
    audioElm.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play")
    infoBox.style.display= "block";
  }
})

//for time stamp
audioElm.addEventListener('timeupdate', ()=>{
  console.log('time updated')
  
})
