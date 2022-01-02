const factsContainer = document.getElementById('facts');
const getFactsButton = document.getElementById('get-facts-button');

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

      console.log(data[0].text);
    });

getFacts();

getFactsButton.onclick(getFacts());
