if (window.location.pathname === '/src/templates/contacts.html') {
  const wrapper = document.querySelector('.content-wrapper');
  wrapper.style.overflow = 'hidden';
};

const contactRequisition = document.querySelector('#contactRequisition');
const contactRequisitionH2 = document.querySelector('#contactRequisitionH2');
const modalA = document.querySelector('#modal');

function openModal (btn) {
  btn.onclick = () => {
    modalA.style.display = 'block';
      document.querySelector('body').style.overflow = 'hidden';
  };
};
openModal(contactRequisition);
openModal(contactRequisitionH2);
