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
const slides = document.getElementById("slides");
const total = slides.children.length;

let index = 0;
let timer = null;

function show(){
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function scheduleNext(){
  clearTimeout(timer);
  timer = setTimeout(() => {
    index++;

    if(index === total){
      // last से आगे (ghost step) → तुरंत reset बिना दिखे
      slides.style.transition = "transform 3s ease-in-out";
      show();

      setTimeout(() => {
        slides.style.transition = "none";
        index = 0;
        show();
        // transition वापस चालू
        requestAnimationFrame(() => {
          slides.style.transition = "transform 3s ease-in-out";
        });
        scheduleNext();
      }, 3000); // slide duration
    } else {
      slides.style.transition = "transform 3s ease-in-out";
      show();
      scheduleNext();
    }

  }, 8000); // 🔥 8 सेकंड रुकना
}

// buttons
function nextSlide(){
  clearTimeout(timer);
  index = (index + 1) % total;
  slides.style.transition = "transform 3s ease-in-out";
  show();
  scheduleNext();
}

function prevSlide(){
  clearTimeout(timer);
  index = (index - 1 + total) % total;
  slides.style.transition = "transform 3s ease-in-out";
  show();
  scheduleNext();
}

// start
scheduleNext();

//music//
const music =
document.getElementById("bgMusic");

Window.addEventListener("lode", () => 
{
  music.muted = false;
  music.onplay().catch( () => {} );
});

document.body.addEventListener("touch stsrt", () =>
{
  music.play();
},{ once: true});