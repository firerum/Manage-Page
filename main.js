const controller = document.querySelector(".controller");

// Manual slides
function slideImages(e) {
   const slider = document.querySelectorAll(".slider");
   if(e.target.className == "first") {
      // Remove current from all sliders
      slider.forEach(slide => {
         slide.classList.remove("active");
      });
      // Add current class to the first slider
      slider[0].classList.add("active");

   } else if(e.target.className == "second") {
      // Remove current from all sliders
      slider.forEach(slide => {
         slide.classList.remove("active");
      });
      // Add current class to the second slider
      slider[1].classList.add("active");

   } else if(e.target.className == "third") {
      // Remove current from all sliders
      slider.forEach(slide => {
         slide.classList.remove("active");
      });
      // Add current class to the third slider
      slider[2].classList.add("active");

   } else if(e.target.className == "fourth"){
      // Remove current from all sliders
      slider.forEach(slide => {
         slide.classList.remove("active");
      });
      // Add current class to the last slider
      slider[slider.length - 1].classList.add("active");
   }
}

// Automatic slides
function autoSlide() {
   const sliders = document.querySelectorAll(".slider");
   const active = document.querySelector(".active");
   // Remove the active class from the current element
   active.classList.remove("active");
   // check if the element has a next sibling
   if(active.nextElementSibling) {
      active.nextElementSibling.classList.add("active");
   } else {
      sliders[0].classList.add("active");
   } 
}


controller.addEventListener("click", slideImages);
const reset = setInterval(autoSlide, 5000);
