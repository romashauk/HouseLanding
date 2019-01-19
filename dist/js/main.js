let animation = document.querySelector(".home");
const logan = document.querySelector(".mixed__logan");

let beforeLoad=()=>{
  animation.classList = "home animation-up";
}
let afterLoad=()=>{
  animation.style.opacity="1";
}
setTimeout(beforeLoad,2000)
setTimeout(afterLoad,4000);


const mySlider = $('.slick__slider')
mySlider.slick({
  infinite: true,
  slidesToShow: 1,
  vertical:true,
  arrows:false,
  speed:1500,
  slidesToShow:1,
});
$('.home').bind('mousewheel',function(e){
  if (e.deltaY < 0) {
    mySlider.slick('slickNext');
  } else {
    mySlider.slick('slickPrev');
  }
})
$('.slick').on('touchstart',function(){
  mySlider.slick('slickNext')
})
$('.home__menu--button').on('click',function(){
  $(this).toggleClass('button--active');
  $('.home-left').toggle('slow');
})
window.onload=function(){
  let mixedLogan = document.querySelector('.mixed__logan p.number');
  let timer = new Timer(0,mixedLogan);

  timeoutId= setInterval(function(){
    timer.tick()
  },15);

  function Timer (time,elem){
    this.time = time;
    this.elem=elem;
    this.tick=function(){
      this.time++;
      this.elem.innerHTML=this.time;
      if(this.time>=100){
        clearTimeout(timeoutId);
      }
    }
  }
}
