if (window.location.pathname === '/contacts/') {
  const wrapper = document.querySelector('.content-wrapper');
  wrapper.style.overflow = 'hidden';
};

const contactRequisition = document.querySelector('#contactRequisition');
const contactRequisitionH2 = document.querySelector('#contactRequisitionH2');
const btnAdaptForModal = document.querySelector('.content-trust__button-svg-adapt')

function openModal (btn) {
  btn.onclick = () => {
      modal.style.display = 'block';
      document.querySelector('body').style.overflow = 'hidden';
  };
};
openModal(contactRequisition);
openModal(contactRequisitionH2);
openModal(btnAdaptForModal);