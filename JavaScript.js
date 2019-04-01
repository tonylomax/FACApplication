let countNum = 1

let imgArr = Array.from(document.getElementsByTagName("img"))


let imgOne = document.getElementById("img1");
let imgTwo = document.getElementById("img2");
let imgThree = document.getElementById("img3");

let play =  document.getElementById("play")
let pause =  document.getElementById("pause")

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    right()
  }
  else if (e.keyCode == 37) {
    left()
  }
})



function newRight(count)  {
  count = countNum
//  console.log(count) //right
  if (count < imgArr.length) {
    imgArr.forEach((e) => {e.style.display="none"})
    imgArr[countNum].style.display = "block"
  } //final image
  else if (count == imgArr.length) {
    imgArr.forEach((e) => {e.style.display="none"})
    imgArr[0].style.display = "block"
    countNum = 0
  }
 countNum ++
}

function newLeft(count) {
    count = countNum
  if (count < imgArr.length) {
    imgArr.forEach((e) => {e.style.display="none"})
    imgArr[imgArr.length-count].style.display = "block" 
} 
  else if (count == imgArr.length) {
    imgArr.forEach((e) => {e.style.display="none"})
    imgArr[0].style.display = "block"
    countNum = 0
  }
  countNum++
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
    console.log(autoPlayVar == false)
  } else {
    autoPlayVar = setInterval(right, 3000)
    console.log(autoPlayVar == false)
  }
  return false;
}




play.addEventListener("click", autoPlay)
pause.addEventListener("click", autoPlay)



document.getElementById("right").addEventListener("click", newRight)

document.getElementById("left").addEventListener("click", newLeft)


