const callMeFooterBtn = document.querySelector('.footer-content__logo-callme');
const leaveRequest = document.querySelector('.footer-content__order-btn');

callMeFooterBtn.onclick = () => {
    modal.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
}
leaveRequest.onclick = () => {
    const callSection = document.querySelector('#callSection');
    const requestSection = document.querySelector('#requestSection');
    const requestSectionInput = document.querySelector('#id_form_type_1');

    callSection.hidden = true;
    requestSection.hidden = false;
    requestSectionInput.checked = true;

    modal.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
}