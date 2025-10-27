console.log('Photo Blog');


/*
PSEUDO CODE

AJAX call to recover API datas for the card
isolate the row to create after the cards
create function to create the html code of the card
    -card image url refer to object url
    -card title refer to object title
    -card text refer to object date
create loop to print the card in the page
*/

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })




const rowEl = document.getElementById('row')
console.log(rowEl);

function createMarkup(object) {
    return `
            <div class="card">
                <img class="pin" src="./assets/img/pin.svg" alt="pin">
                <img class="card-image" src="${object.url}" alt="img">
                    <h5 class="card-title">${object.title}</h5>
                    <p class="card-text">
                        ${object.date}
                    </p>
            </div>
        `
}

for (let i = 0; i < 6; i++) {
    rowEl.innerHTML += createMarkup(fetch)
}