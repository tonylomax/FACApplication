
let countNum = 0

/* Place all carousel images into array */
let imgArr = Array.from(document.getElementsByTagName("img"))

let play =  document.getElementById("play")
let pause =  document.getElementById("pause")

/* Move carousel on keypress */
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    showSlide("right")
  }
  else if (e.keyCode == 37) {
    showSlide("left")
  }
})

/* Make all carousel images hidden...*/
imgArr.forEach((img) => {img.style.display="none"})
/* ... except the very first image*/
imgArr[0].style.display="block"

/* Funcation that takes the nav arrow direction as an argument. Right increases 
the counter and displayes the next image along, left displays the previous image*/
function showSlide(e) { 
  imgArr.forEach((img) => {img.style.display="none"})
  e == "right" ? countNum ++ :false
  e == "left" ? countNum --:false
  countNum < 0 ? countNum = imgArr.length-1:false
  countNum == imgArr.length ? countNum = 0:false
  imgArr[countNum].style.display = "block"
}

/* Change display of play/pause buttons when clicked */
play.addEventListener("click", () => {
  pause.style.display = "initial" 
  play.style.display = "none" 
})

pause.addEventListener("click", () => {
  play.style.display = "initial" 
  pause.style.display = "none" 
})

/* Auto play function*/

let autoPlayVar = null

function autoPlay() {
  if (autoPlayVar) {
    clearInterval(autoPlayVar);
    autoPlayVar = null;
  } else {
    autoPlayVar = setInterval(() => {showSlide("right")}, 3000)
  }
  return false;
}

/* Event listeners for play/pause and nav buttons*/
play.addEventListener("click", autoPlay)
pause.addEventListener("click", autoPlay)
document.getElementById("right").addEventListener("click", () => { showSlide("right"); })
document.getElementById("left").addEventListener("click", () => { showSlide("left"); })

