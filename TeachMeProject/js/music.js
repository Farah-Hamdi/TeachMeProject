function music_function() {
  const element = document.getElementById("music-form");
    var x = document.getElementById("music-form");
    if (x.style.display === "none") {
      x.style.display = "flex";
      element.scrollIntoView();
    }
    else{
        x.style.display="none";
    } 
}