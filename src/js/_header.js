// const input1 = document.querySelector('#id_form_type_0')
// const input2 = document.querySelector('#id_form_type_1')

// const label1 = input1.closest('label')
// const label2 = input2.closest('label')

// label1.insertAdjacentElement('beforeBegin', input1);
// label2.insertAdjacentElement('beforeBegin', input2);

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

// const textareaInModal = document.querySelector('#id_description');
// textareaInModal.placeholder = 'Текст';

// const attachFile = document.querySelector('.feedback-requestSection__attach label');
// const inputFile = document.querySelector('#id_file');

// attachFile.addEventListener('dragenter', (event) => {
//     event.preventDefault();
// });
// attachFile.addEventListener('dragover', (event) => {
//     event.preventDefault();
// });

// attachFile.addEventListener('drop', (event) => {
//     event.preventDefault();
//     let draggedData = event.dataTransfer;
//     let files = draggedData.files;
// });

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