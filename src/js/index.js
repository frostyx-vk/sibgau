'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const modalBtn = document.querySelector('.header-modalbtn');
    const modal = document.querySelector('#modal');
    const modalClose = document.querySelector('.modal-close');

    const callSection = document.querySelector('#callSection');
    const requestSection = document.querySelector('#requestSection');
    const callSectionInput = document.querySelector('#id_form_type_0');

    const hidden = 'hidden';
    const auto = 'auto';

    function bodyOverflowHidden(hide, show) {
        if (burger.classList.contains('active')) {
            document.querySelector('body').style.overflow = hide;
        } else {
            document.querySelector('body').style.overflow = show;
        };
    }

    modalBtn.onclick = () => {
        modal.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
    }

    modalClose.onclick = () => {
        modal.style.display = 'none';
        callSectionInput.checked = true;
        callSection.hidden = false;

        bodyOverflowHidden(hidden, auto);
    };

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.querySelector('body').style.overflow = 'auto';
            callSectionInput.checked = true;
            callSection.hidden = false;
        };

        bodyOverflowHidden(hidden, auto);
    };

    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        bodyOverflowHidden(auto, hidden);

        burger.classList.toggle('active');
        document.querySelector('.burger-menu').classList.toggle('open');
    });

    const burgerOrder = document.querySelector('.burger-menu .content-trust__button button');
    burgerOrder.onclick = () => {
        modal.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
    };

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })

    function openModal(btn) {
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
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.textAlign = "center";
        dots[slideIndex - 1].className += "active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    };

    const callMeFooterBtn = document.querySelector('.footer-content__logo-callme');
    const leaveRequest = document.querySelector('.footer-content__order-btn');

    callMeFooterBtn.onclick = () => {
        modal.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
    }
    leaveRequest.onclick = () => {
        modal.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
    }
});
