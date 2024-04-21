
let elem = document.querySelector("#heading");
let rect = elem.getBoundingClientRect();
contactbtn=document.getElementById("contact-us");
var contactBtnFunc =function(){
    var y=window.scrollY;
    if(y>=rect.y){
        contactbtn.className="contact show"
    }
    else{
        contactbtn.className="contact hide"
    }
};

window.addEventListener("scroll",contactBtnFunc);