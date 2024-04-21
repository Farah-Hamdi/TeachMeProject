function app_function() {
  const element = document.getElementById("app-dev-form");
    var x = document.getElementById("app-dev-form");
    if (x.style.display === "none") {
      x.style.display = "flex";
      element.scrollIntoView();
    }
    else{
        x.style.display="none";
    } 
}