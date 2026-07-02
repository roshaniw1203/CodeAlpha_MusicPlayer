const songs = [

{
title:"Kesariya",
artist:"Arijit Singh",
src:"songs/Kesariya.mpeg"
},

{
title:"Raataan Lambiyan",
artist:"Jubin Nautiyal",
src:"songs/RaataanLambiyan.mpeg"
},

{
title:"Tum Hi Ho",
artist:"Arijit Singh",
src:"songs/TumHiHo.mpeg"
},

{
title:"Olya Sanjveli",
artist:"Atul Kulkarni, Sagrika Ghatge",
src:"songs/OlyaSanjveli.mpeg"
},

{
title:"Galavarkhali",
artist:"Ajay-Atul, Swapnil Bandodkar",
src:"songs/Galavarkhali.mpeg"
},

{
title:"Adhir Man Jhale",
artist:"Shreya Ghoshal",
src:"songs/AdhirManJhale.mpeg"
}

];

let currentSong = 0;

const audio = document.getElementById("song");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playBtn = document.getElementById("playBtn");

function loadSong(index) {

    audio.src = songs[index].src;

    title.innerText = songs[index].title;
    artist.innerText = songs[index].artist;


    console.log("Loading:", songs[index].src);
    
    updateActiveSong();
}

loadSong(currentSong);

function playPause(){

    if(audio.paused){

        audio.play();
        playBtn.innerHTML =
        '<i class="fas fa-pause"></i>';

    }
    else{

        audio.pause();
        playBtn.innerHTML =
        '<i class="fas fa-play"></i>';

    }
}

function nextSong(){

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();

    playBtn.innerHTML =
    '<i class="fas fa-pause"></i>';

}

function previousSong(){

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();

    playBtn.innerHTML =
    '<i class="fas fa-pause"></i>';

}

function selectSong(index){

    currentSong = index;

    loadSong(currentSong);
    audio.play();

    playBtn.innerHTML =
    '<i class="fas fa-pause"></i>';
}

audio.addEventListener("timeupdate",()=>{

    if(audio.duration){

        progress.max = audio.duration;
        progress.value = audio.currentTime;

    }

});

progress.addEventListener("input",()=>{

    audio.currentTime = progress.value;

});

volume.addEventListener("input",()=>{

    audio.volume = volume.value;

});

audio.addEventListener("ended",()=>{

    nextSong();

});
function updateActiveSong(){

    const items = document.querySelectorAll("#playlist li");

    items.forEach(item=>{
        item.classList.remove("activeSong");
    });

    if(items[currentSong]){
        items[currentSong].classList.add("activeSong");
    }
}