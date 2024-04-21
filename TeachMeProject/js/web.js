function web_function() {
  const element = document.getElementById("web-form");
    var x = document.getElementById("web-form");
    if (x.style.display === "none") {
      x.style.display = "flex";
      element.scrollIntoView();
    }
    else{
        x.style.display="none";
    } 
}