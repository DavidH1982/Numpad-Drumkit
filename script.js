const boomSound = document.getElementById("boomSound");
const clapSound = document.getElementById("clapSound");
const hihatSound = document.getElementById("hihatSound");
const kickSound = document.getElementById("kickSound");
const openSound = document.getElementById("openhatSound");
const rideSound = document.getElementById("rideSound");
const snareSound = document.getElementById("snareSound");
const tinkSound = document.getElementById("tinkSound");
const tomSound = document.getElementById("tomSound");

let playAudio = [
  boomSound,
  clapSound,
  hihatSound,
  kickSound,
  openSound,
  rideSound,
  snareSound,
  tinkSound,
  tomSound,
];

window.addEventListener("keypress", (event) => {
  if (event.keyCode == 49) {
    playAudio[0].play();
    playAudio[0].currentTime = 0;
  } else if (event.keyCode == 50) {
    playAudio[1].play();
    playAudio[1].currentTime = 0;
  } else if (event.keyCode == 51) {
    playAudio[2].play();
    playAudio[2].currentTime = 0;
  } else if (event.keyCode == 52) {
    playAudio[3].play();
    playAudio[3].currentTime = 0;
  } else if (event.keyCode == 53) {
    playAudio[4].play();
    playAudio[4].currentTime = 0;
  } else if (event.keyCode == 54) {
    playAudio[5].play();
    playAudio[5].currentTime = 0;
  } else if (event.keyCode == 55) {
    playAudio[6].play();
    playAudio[6].currentTime = 0;
  } else if (event.keyCode == 56) {
    playAudio[7].play();
    playAudio[7].currentTime = 0;
  } else if (event.keyCode == 57) {
    playAudio[8].play();
    playAudio[8].currentTime = 0;
  }
});

document.getElementById("Num1").addEventListener("click", () => {
  playAudio[0].play();
  playAudio[0].currentTime = 0;
});
document.getElementById("Num2").addEventListener("click", () => {
  playAudio[1].play();
  playAudio[1].currentTime = 0;
});
document.getElementById("Num3").addEventListener("click", () => {
  playAudio[2].play();
  playAudio[2].currentTime = 0;
});
document.getElementById("Num4").addEventListener("click", () => {
  playAudio[3].play();
  playAudio[3].currentTime = 0;
});
document.getElementById("Num5").addEventListener("click", () => {
  playAudio[4].play();
  playAudio[4].currentTime = 0;
});
document.getElementById("Num6").addEventListener("click", () => {
  playAudio[5].play();
  playAudio[5].currentTime = 0;
});
document.getElementById("Num7").addEventListener("click", () => {
  playAudio[6].play();
  playAudio[6].currentTime = 0;
});
document.getElementById("Num8").addEventListener("click", () => {
  playAudio[7].play();
  playAudio[7].currentTime = 0;
});
document.getElementById("Num9").addEventListener("click", () => {
  playAudio[8].play();
  playAudio[8].currentTime = 0;
});
document.getElementById("snareDrum").addEventListener("click", () => {
  playAudio[1].play();
  playAudio[1].currentTime = 0;
});
document.getElementById("ride").addEventListener("click", () => {
  playAudio[5].play();
  playAudio[5].currentTime = 0;
});
document.getElementById("tomDrum").addEventListener("click", () => {
  playAudio[8].play();
  playAudio[8].currentTime = 0;
});
document.getElementById("kickDrum").addEventListener("click", () => {
  playAudio[0].play();
  playAudio[0].currentTime = 0;
});
document.getElementById("standDrum").addEventListener("click", () => {
  playAudio[6].play();
  playAudio[6].currentTime = 0;
});
document.getElementById("smallSnare").addEventListener("click", () => {
  playAudio[3].play();
  playAudio[3].currentTime = 0;
});
document.getElementById("hihat").addEventListener("click", () => {
  playAudio[2].play();
  playAudio[2].currentTime = 0;
});

