function data_function() {
  const element = document.getElementById("data-form");
    var x = document.getElementById("data-form");
    if (x.style.display === "none") {
      x.style.display = "flex";
      element.scrollIntoView();
    }
    else{
        x.style.display="none";
        
    } 
}