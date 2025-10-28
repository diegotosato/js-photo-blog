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




/* FUNCTIONS */
function createMarkup(object) {
    const divEl = document.createElement('div')
    divEl.setAttribute('class', 'card')
    divEl.innerHTML = `
                    <img class="pin" src="./assets/img/pin.svg" alt="pin">
                    <img class="card-image" src="${object.url}" alt="img">
                    <p class="card-text">
                        ${object.date}
                    </p>
                    <h5 class="card-title">
                        ${object.title}
                    </h5>
    `
    rowEl.appendChild(divEl)
    return divEl
    // `
    //         <div class="card">
    //             <img class="pin" src="./assets/img/pin.svg" alt="pin">
    //             <img class="card-image" src="${object.url}" alt="img">
    //             <p class="card-text">
    //                 ${object.date}
    //             </p>
    //             <h5 class="card-title">
    //                 ${object.title}
    //             </h5>
    //         </div>
    //     `
}


/* Isolate DOM Element */
const rowEl = document.getElementById('row')
// console.log(rowEl);

const buttonEl = document.getElementById('close-overlay')
// console.log(buttonEl);

const overlayEl = document.getElementById('overlay')
// console.log(overlayEl);



/* AJAX call */
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
fetch(endpoint)
    .then(response => response.json())
    .then(data => {

        // for (let i = 0; i < 6; i++) {
        //     rowEl.innerHTML += createMarkup(data[i])
        // }

        data.slice().forEach(object => {
            createMarkup(object);
        });

        let cardEl = document.getElementsByClassName('card')


        Array.from(cardEl).forEach(function (card) {
            card.addEventListener('click', function () {
                overlayEl.classList.toggle('d-none')
            });
        });

        
        

    })


buttonEl.addEventListener('click', () => {
    overlayEl.classList.toggle('d-none')
})


