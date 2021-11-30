window.addEventListener("keypress", (event) => {
  if (event.keyCode == 49) {
    document.getElementById("boomSound").play();
  } else if (event.keyCode == 50) {
    document.getElementById("clapSound").play();
  } else if (event.keyCode == 51) {
    document.getElementById("hihatSound").play();
  } else if (event.keyCode == 52) {
    document.getElementById("kickSound").play();
  } else if (event.keyCode == 53) {
    document.getElementById("openhatSound").play();
  } else if (event.keyCode == 54) {
    document.getElementById("rideSound").play();
  } else if (event.keyCode == 55) {
    document.getElementById("snareSound").play();
  } else if (event.keyCode == 56) {
    document.getElementById("tinkSound").play();
  } else if (event.keyCode == 57) {
    document.getElementById("tomSound").play();
  }
});

document.getElementById("Num1").addEventListener("click", () => {
  document.getElementById("boomSound").play();
});
document.getElementById("Num2").addEventListener("click", () => {
  document.getElementById("clapSound").play();
});
document.getElementById("Num3").addEventListener("click", () => {
  document.getElementById("hihatSound").play();
});
document.getElementById("Num4").addEventListener("click", () => {
  document.getElementById("kickSound").play();
});
document.getElementById("Num5").addEventListener("click", () => {
  document.getElementById("openhatSound").play();
});
document.getElementById("Num6").addEventListener("click", () => {
  document.getElementById("rideSound").play();
});
document.getElementById("Num7").addEventListener("click", () => {
  document.getElementById("snareSound").play();
});
document.getElementById("Num8").addEventListener("click", () => {
  document.getElementById("tinkSound").play();
});
document.getElementById("Num9").addEventListener("click", () => {
  document.getElementById("tomSound").play();
});
