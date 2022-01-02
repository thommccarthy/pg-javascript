const factsContainer = document.getElementById('facts');
const getFactsButton = document.getElementById('get-facts-button');
const modalContainer = document.getElementById('modal-container');
const closeButton = document.getElementById('close-button');

console.log(factsContainer);

const getFacts = () =>
  fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((item) => {
        let li = document.createElement('li');
        factsContainer.appendChild(
          li.appendChild(document.createTextNode(item.text))
        );
        const br = document.createElement('br');
        factsContainer.appendChild(br);
      });
    })
    .catch((err) => console.log(err));

const openModal = () => {
  modalContainer.style.bottom = 0;
};

const closeModal = () => {
  modalContainer.style.bottom = '-100vh';
};

setTimeout(() => {
  openModal();
}, 3000);

getFactsButton.addEventListener('click', getFacts, { once: true });
closeButton.addEventListener('click', closeModal);
