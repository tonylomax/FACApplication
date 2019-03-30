let countNum = 1
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

function right(countnum) {
    if (countNum == 1) {
    countNum = 2
    imgOne.style.display = "none"
    imgTwo.style.display = "block"
    imgThree.style.display = "none"
    
  }
  else if (countNum == 2) {
    countNum = 3;
    imgOne.style.display = "none"
    imgTwo.style.display = "none"
    imgThree.style.display = "block"
    
  }
  else if (countNum == 3) {
     countNum = 1;
    imgOne.style.display = "block"
    imgTwo.style.display = "none"
    imgThree.style.display = "none"
  }
}
 
function left(countnum) {
  if (countNum == 1) {
    countNum = 3
    imgOne.style.display = "none"
    imgTwo.style.display = "none"
    imgThree.style.display = "block"
    
  }
  else if (countNum == 3) {
    countNum = 2;
    imgOne.style.display = "none"
    imgTwo.style.display = "block"
    imgThree.style.display = "none"
    
  }
  else if (countNum == 2) {
     countNum = 1;
    imgOne.style.display = "block"
    imgTwo.style.display = "none"
    imgThree.style.display = "none"
  }  
}

  
play.addEventListener("click", () => {
  pause.style.display = "initial" 
  play.style.display = "none" 
})

pause.addEventListener("click", () => {
  play.style.display = "initial" 
  pause.style.display = "none" 
})



function autoPlay() {
  const autoPlayVar = setInterval(right, 3000)
}



play.addEventListener("click", autoPlay),
pause.addEventListener("click", clearInterval(autoPlayVar)),  



document.getElementById("right").addEventListener("click", right)

document.getElementById("left").addEventListener("click", left)


