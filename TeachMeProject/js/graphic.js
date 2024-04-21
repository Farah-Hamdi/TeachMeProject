function graphic_function() {
  const element = document.getElementById("graphic-form");
    var x = document.getElementById("graphic-form");
    if (x.style.display === "none") {
      x.style.display = "flex";
      element.scrollIntoView();
    }
    else{
        x.style.display="none";
    } 
}