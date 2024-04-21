//Javascript for video slider navigation
const btns=document.querySelectorAll(".nav-btn");
const slides=document.querySelectorAll(".video-slide");

var sliderNav=function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    });
});


//var myIndex = 0;
//carousel();

//function carousel() {
//  var i;
//  var x = document.getElementsByClassName("video-slide");
 // for (i = 0; i < x.length; i++) {
  //  x[i].style.display = "none";  
  //}
  //myIndex++;
  //if (myIndex > x.length) {myIndex = 1}    
  //x[myIndex-1].style.display = "flex";  
  //setTimeout(carousel, 2000); // Change image every 2 seconds
//}