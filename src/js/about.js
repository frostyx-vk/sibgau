'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const aboutRequisition = document.querySelector('#aboutRequisition');
    const aboutRequisitionH2 = document.querySelector('#aboutRequisitionH2');
    const btnAdaptForModal = document.querySelector('.content-trust__button-svg-adapt')

    function openModal(btn) {
        btn.onclick = () => {
            modal.style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';
        };
    };
    openModal(aboutRequisition);
    openModal(aboutRequisitionH2);
    openModal(btnAdaptForModal);

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

    const btnChangeTheme = document.querySelector('.header__contacts-btn');
    btnChangeTheme.style.display = 'block';

    function lightMode() {
        const body = document.body;
        const wasLightMode = localStorage.getItem('light-mode') === 'true';

        localStorage.setItem('light-mode', !wasLightMode);
        body.classList.toggle('light-mode', !wasLightMode);
    };
    btnChangeTheme.addEventListener('click', lightMode);

    function onload() {
        document.body.classList.toggle('light-mode', localStorage.getItem('light-mode') === 'true');
    };
    onload();
 });