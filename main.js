
/* MENU ACCOUNT*/
let btnLi = document.getElementById('dropDownMenu');
let menu = document.getElementById('dropMenu');
let body = document.querySelector('body');

btnLi.onclick = function(){
    menu.style.display='flex';
    menu.style.flexDirection = 'row-reverse';
    console.log("block");
};

body.onclick = function(event){
    if (event.target == menu){
        menu.style.display = 'none';
        console.log("none")
    }
};

/*MOBILE SLIDER*/

let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
  showSlides(slides);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


