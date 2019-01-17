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


mySlider = $('.slick__slider')
mySlider.slick({
  infinite: true,
  slidesToShow: 1,
  vertical:true,
  arrows:false,
  speed:1500,
  slidesToShow:1,
});
$('.home').bind('mousewheel',function(e){
  console.log(e.deltaY)
  if (e.deltaY < 0) {
    mySlider.slick('slickNext');
  } else {
    mySlider.slick('slickPrev');
  }
})
$('.home').on('touchstart',function(){
  mySlider.slick({
    infinite: true,
    slidesToShow: 1,
    vertical:true,
    arrows:false,
    speed:1500,
    slidesToShow:1,
  });
})
