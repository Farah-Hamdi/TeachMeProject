function fashion_function() {
  const element = document.getElementById("fashion-design-form");
  
    var x = document.getElementById("fashion-design-form");
    if (x.style.display === "none") {
      x.style.display = "flex";
      element.scrollIntoView();
    }
    else{
        x.style.display="none";
        
    } 
}