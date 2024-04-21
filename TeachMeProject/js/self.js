function self_function() {
  const element = document.getElementById("self-form");
    var x = document.getElementById("self-form");
    if (x.style.display === "none") {
      x.style.display = "flex";
      element.scrollIntoView();
    }
    else{
        x.style.display="none";
    } 
}