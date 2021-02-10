const play = document.getElementById("play");
const music = document.querySelector("audio");
const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// play button funtion
let isPlaying = false;
const playMusic = () => {
    // music.play();
    play.classList.replace("fa-play", "fa-pause");
    image.classList.add("animate-play");
    isPlaying = true;
};

// pause button function
const pauseMusic = () => {
    image.classList.replace("animate-play", "animate-pause");
    play.classList.replace("fa-pause", "fa-play");
    isPlaying = false;
};

play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
});


// dynamically changing music name and artist
