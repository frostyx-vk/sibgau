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