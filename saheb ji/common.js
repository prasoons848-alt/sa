function toggleMenu(){
  var menu = document.getElementById("navLinks");
  menu.classList.toggle("show");
}

/* 👉 page कहीं भी click → menu close */
document.addEventListener("click", function(e){

  var menu = document.getElementById("navLinks");
  var icon = document.querySelector(".menu-icon");

  /* अगर click menu या icon पर नहीं है */
  if(!menu.contains(e.target) && !icon.contains(e.target)){
    menu.classList.remove("show");
  }

});