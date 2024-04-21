let min = document.querySelector("#swipe");
let di = elem.getBoundingClientRect();
contactbtn=document.getElementById("contact-us");
var contactBtnFunc =function(){
    var y=window.scrollY;
    if(y>=di.y){
        contactbtn.className="contact show"
    }
    else{
        contactbtn.className="contact hide"
    }
};
window.addEventListener("scroll",contactBtnFunc);