function photo_function() {
  const element = document.getElementById("photography-form");
    var x = document.getElementById("photography-form");
    if (x.style.display === "none") {
      x.style.display = "flex";
      element.scrollIntoView();
    }
    else{
        x.style.display="none";
    } 
}