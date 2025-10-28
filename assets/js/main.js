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
function createCardMarkup(object) {
    const divEl = document.createElement('div')
    divEl.setAttribute('class', 'card')
    // divEl.classList.add('card-hover-effect')
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
}




function createOverlayMarkup(object) {
    const sectionEl = document.createElement('section')
    sectionEl.setAttribute('class', 'overlay')
    sectionEl.classList.add('d-none')

    sectionEl.innerHTML = `
        <button class="close-overlay">Chiudi</button>
        <img class="overlay-image" src="${object.url}" alt="overlay_image">
    `

    document.body.prepend(sectionEl)

    return sectionEl
}













/* Isolate DOM Element */
const rowEl = document.getElementById('row')
// console.log(rowEl);








/* AJAX call */
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
fetch(endpoint)
    .then(response => response.json())
    .then(data => {

        data.slice().forEach(object => {

            const divEl = createCardMarkup(object);
            const sectionEl = createOverlayMarkup(object);
            const buttonEl = document.querySelector('button')
            const body = document.querySelector('body')

            
            
            divEl.addEventListener('mouseover', () => {
                divEl.classList.add('card-hover-effect')
            })
            
            divEl.addEventListener('mouseleave', () => {
                divEl.classList.remove('card-hover-effect')
            })
            
            divEl.addEventListener('click', () => {
                sectionEl.classList.toggle('d-none')
                body.classList.toggle('overflow')
                divEl.classList.remove('card-hover-effect')
            })

            buttonEl.addEventListener('click', () => {
                
                sectionEl.classList.toggle('d-none')
                body.classList.toggle('overflow')

            })
            return [sectionEl, divEl]
        });




    })




