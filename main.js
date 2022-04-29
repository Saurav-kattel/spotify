 let i = 0;
let audioElm = new Audio("/music/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let infoBox = document.getElementById("infoBox");
let playBox = document.getElementsByClassName("playBox");
let items = document.getElementsByClassName("items");
let songName = document.getElementsByClassName('songsName');
let previousBtn = document.getElementById("previousBtn")
let nextBtn = document.getElementById("nextBtn")
let marquee = document.getElementById('marquee')
let songs = [
  
  { name: "annner-marie", filePath: "/music/1.mp3"},
  
  { name: "Closer_by_chainsmokers", filePath: "/music/Closer_by_chainsmokers_lyrical_video_--(256k).mp3" },
  
  { name: "come-on-come-on", filePath: "/music/COME_ON_COME_ON_TURN_THE_RADIO_ON_2021._.Original_remix_Lyrics...._only_sia_.mp3" },
  
  { name: "Taki-Taki", filePath: "/music/DJ_Snake,_Selena_Gomez,_Cardi_B,_Ozuna_-_Taki_Taki_(Lyrics)(256k).mp3"},
  
  { name: "Friends", filePath: "/music/FRIENDS_-_Anne-Marie_&_Marshmello_(_Lirik_Terjemahan_Indonesia_)_--(256k).mp3" },
  
  { name: "Imagine_Dragons", filePath: "/music/Imagine_Dragons_-_Believer_(Lyrics)(256k).mp3" },
  
  { name: "Salander", filePath: "/music/SLANDER_-_I'm_sorry_don't_leave_me_(Love_Is_Gone)_(Lyrics)_ft._Dylan_Matthew.mp3" },
  
  { name: "The_Band_Perry", filePath: "/music/The_Band_Perry_-_If_I_Die_Young_(Lyrics)(256k).mp3" }
  
   ]

   
//audioElm.play();

// for play and pause
infoBox.style.display= "none";

masterPlay.addEventListener("click", ()=>{
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
audioElm.addEventListener("timeupdate", ()=>{
  // updating progress bar
  let progress = parseInt((audioElm.currentTime/audioElm.duration)*100)
progressBar.value = progress;
})

//setting audio corresponding to progress bar

progressBar.addEventListener("change", ()=>{
  audioElm.currentTime=progressBar.value * audioElm.duration/100
})

//itreating array
Array.from(items).forEach((element,i)=>{
 let sth =  document.getElementsByClassName("songsName")[i].innerText = songs[i].name;
});

const makeAllPlay = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    infoBox.style.display= "block";
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
      marquee.innerText = songs[i].name;
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element,i)=>{
  element.addEventListener('click', (e)=>{
    makeAllPlay();
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    audioElm.src = songs[i].filePath;
    audioElm.currentTime = 0;
audioElm.play();
      masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
      marquee.innerText = songs[i].name;
  })
})

//fowarding and previous playing functionz



nextBtn.addEventListener('click', ()=>{
  i++;
  audioElm.src = songs[i].filePath;
  audioElm.currentTime = 0;
audioElm.play();
      masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    marquee.innerText = songs[i].name;
})

previousBtn.addEventListener('click', ()=>{
  i--;
  audioElm.src = songs[i].filePath;
  audioElm.currentTime = 0;
audioElm.play();
      masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  marquee.innerText = songs[i].name;
})
