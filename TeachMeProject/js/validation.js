var fnameError=document.getElementById('first-name-error');
var lnameError=document.getElementById('last-name-error');
var phoneError=document.getElementById('phone-error');
var signError=document.getElementById('signup-error');
var emailError=document.getElementById('email-error');
var agreeerror=document.getElementById('services-error');
var passerror=document.getElementById('pass-error');
function validateName(){
    var fname=document.getElementById('contact-fname').value;
    var lname=document.getElementById('contact-lname').value;
    if(fname.length==0){
        fnameError.innerHTML='Name is required';
        return false;
    }
    if(fname.length<3 || fname.length>20){
        fnameError.innerHTML='Invalid name';
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if(!fname.match(letters)){
      fnameError.innerHTML='Invalid value,only letters allowed';
      return false;
    }
    fnameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
   
}

function validateLName(){
    var lname=document.getElementById('contact-lname').value;
    if(lname.length==0){
        lnameError.innerHTML='Name is required';
        return false;
    }
    if(lname.length<3 || lname.length>20){
        lnameError.innerHTML='Invalid name';
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if(!lname.match(letters)){
      lnameError.innerHTML='Invalid value,only letters allowed';
      return false;
    }
    lnameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
   
}


function validatePhone(){
    var phone=document.getElementById('contact-phone').value;


    if(phone.length==0){
        phoneError.innerHTML='Phone no is required';
        return false;
    }
    if(phone.length!=11){
        phoneError.innerHTML='Phone no should be 11 digits';
        return false;
    }
    var numbers=/^[0-9]{11}$/;
    if(!phone.match(numbers)){
        phoneError.innerHTML='Only digits allowed';
        return false;
    }

    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email=document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Invalid email';
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePass(){
    var pass=document.getElementById('contact-password').value;
    if(pass.length==0){
        passerror.innerHTML='Password is required';
        return false;
    }
    if(pass.length<8){
        passerror.innerHTML='Password should be 8 characters long';
        return false;
    }
    passerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateEmail() || !validateLName() || !validateName() || !validatePhone() || !validatePass()){
        signError.style.display='flex';
        signError.innerHTML='Please fix error to signup';
       setTimeout(function(){signError.style.display='none';},3000);
        return false;
    }
    var checkbtn=document.getElementById('check');
    if(!checkbtn.checked){
        agreeerror.innerHTML="Please agree to terms to signup";
        return false;
    }
    
    
    
}