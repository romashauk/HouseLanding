let animation = document.querySelector(".animation");
console.log(animation)
let beforeLoad=()=>{
  animation.classList = " animation animation-up";
}
let afterLoad=()=>{
  animation.style.display ="none";
}
setTimeout(beforeLoad,2000)
setTimeout(afterLoad,6000)