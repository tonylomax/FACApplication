let countNum = 1
let imgOne = document.getElementById("img1");
let imgTwo = document.getElementById("img2");
let imgThree = document.getElementById("img3");

document.getElementById("right").addEventListener("click", () => {
countNum ++;
  if (countNum == 1) {
    imgOne.style.display = "initial"
    imgTwo.style.display = "none"
    imgThree.style.display = "none"
    
  }
  else if (countNum == 2) {
    imgOne.style.display = "none"
    imgTwo.style.display = "initial"
    imgThree.style.display = "none"
    
  }
  else if (countNum == 3) {
    imgOne.style.display = "none"
    imgTwo.style.display = "none"
    imgThree.style.display = "initial"
  }})


document.getElementById("left").addEventListener("click", () => {
countNum --;
  if (countNum == 1) {
    imgOne.style.display = "initial"
    imgTwo.style.display = "none"
    imgThree.style.display = "none"
    
  }
  else if (countNum == 2) {
    imgOne.style.display = "none"
    imgTwo.style.display = "initial"
    imgThree.style.display = "none"
    
  }
  else if (countNum == 3) {
    imgOne.style.display = "none"
    imgTwo.style.display = "none"
    imgThree.style.display = "initial"
  }})
