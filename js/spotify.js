let songIndex=0;
let audioElement =new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = document.getElementsByClassName('songItemPlay');
let songs = [
    {songName:"At My Worst (Pink Sweats)", filePath:"songs/1.mp3", coverPath:"coverImg/1.jpg"},
    {songName:"Until i found you (Stephen Sanchez)", filePath:"songs/2.mp3", coverPath:"coverImg/2.jpg"},
    {songName:"Love me like you do (Ellie Goulding)", filePath:"songs/3.mp3", coverPath:"coverImg/3.jpg"},
    {songName:"Faded (Allan Walker)", filePath:"songs/4.mp3", coverPath:"coverImg/4.jpg"},
    {songName:"Dandelions (Ruth B)", filePath:"songs/5.mp3", coverPath:"coverImg/5.jpg"},
    {songName:"Headlights (Andreas Wistrand)", filePath:"songs/6.mp3", coverPath:"coverImg/6.jpg"},
    {songName:"Heat Waves (Glass Animals)", filePath:"songs/7.mp3", coverPath:"coverImg/7.jpg"},
    {songName:"Shape of you (Ed Sheeran)", filePath:"songs/8.mp3", coverPath:"coverImg/8.jpg"},
    {songName:"Something just like this (The ChianSmokers)", filePath:"songs/9.mp3", coverPath:"coverImg/9.jpg"},
    {songName:"Night-Changes (One Direction)", filePath:"songs/10.mp3", coverPath:"coverImg/10.jpg"},
  ]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

audioElement.addEventListener('timeupdate', ()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })  
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

