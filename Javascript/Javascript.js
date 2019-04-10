window.onload = function() {
let countNum = 0

let imgArr = Array.from(document.getElementsByTagName("img"))
let play =  document.getElementById("play")
let pause =  document.getElementById("pause")



document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    showSlide("right")
  }
  else if (e.keyCode == 37) {
    showSlide("left")
  }
})

imgArr.forEach((img) => {img.style.display="none"})
imgArr[0].style.display="block"

function showSlide(e) { 
  imgArr.forEach((img) => {img.style.display="none"})
  e == "right" ? countNum ++ :false
  e == "left" ? countNum --:false
  countNum < 0 ? countNum = imgArr.length-1:false
  countNum == imgArr.length ? countNum = 0:false
  imgArr[countNum].style.display = "block"
}
   
play.addEventListener("click", () => {
  pause.style.display = "initial" 
  play.style.display = "none" 
})

pause.addEventListener("click", () => {
  play.style.display = "initial" 
  pause.style.display = "none" 
})

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

play.addEventListener("click", autoPlay)
pause.addEventListener("click", autoPlay)
                          

document.getElementById("right").addEventListener("click", () => { showSlide("right"); })
document.getElementById("left").addEventListener("click", () => { showSlide("left"); })

}
