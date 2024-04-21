function market_function() {
  const element = document.getElementById("marketing-form");
    var x = document.getElementById("marketing-form");
    if (x.style.display === "none") {
      x.style.display = "flex";
      element.scrollIntoView();
    }
    else{
        x.style.display="none";
    } 
}