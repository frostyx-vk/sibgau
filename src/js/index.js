'use strict'

document.addEventListener('DOMContentLoaded', () => {
    function openModal (btn) {
        btn.onclick = () => {
            modal.style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';
        }
    }

    const becomeClient = document.querySelector('#becomeClient');
    const becomeClientH2 = document.querySelector('#becomeClientH2');
    openModal(becomeClient);
    openModal(becomeClientH2);

    const writeToUs = document.querySelector('#writeToUs');
    const writeToUsH2 = document.querySelector('#writeToUsH2');
    openModal(writeToUs);
    openModal(writeToUsH2);

    const btnsAdaptForModal = document.querySelectorAll('.content-trust__button-svg-adapt');
    btnsAdaptForModal.forEach(btn => {
        openModal(btn);
    });

    let slideIndex = 1;
    showSlides(slideIndex);
    
    const prevBtn = document.querySelector('.prev');
    prevBtn.addEventListener('click', () => {
        plusSlides(-1);
    });
    
    const nextBtn = document.querySelector('.next');
    nextBtn.addEventListener('click', () => {
        plusSlides(1);
    });

    function plusSlides(n) {
      showSlides(slideIndex += n);
    };
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    };
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      let captionText = document.getElementById("caption");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex-1].style.display = "block";
      slides[slideIndex-1].style.textAlign = "center";
      dots[slideIndex-1].className += "active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    };
});
