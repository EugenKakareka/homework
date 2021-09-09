//task1
const game = new Promise((resolve, reject) => {

        setTimeout(() => {
            let number = Math.floor(Math.random() * 6) + 1
            if (number === 6) {
                reject()
            } else {
                console.log('Start the game')
                resolve(number)
            }
        }, 2000)
    })
    .then((number) => {
        if (number === 1) {
            console.log('Stay Here')
        } else {
            console.log(`Go ${number} steps`)
        }
    })
    .catch(() => { console.log('Exit') })

//task2

function goToShop() {
    let number = Math.floor(Math.random() * 6) + 1
    return Promise.resolve(number)
}

function makeDinner() {
    return Promise.resolve(
        setTimeout(() => { console.log('Bon Appetit') }, 3000)
    )
}

class ProductError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ProductError';
    }
}
goToShop().then((number) => {
    if (number < 4) {
        return Promise.reject('Too low products')
    } else makeDinner()
}).catch((message) => {

    throw new ProductError(message)
})

//task 3

const getData = () => fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
        render(data.results)
    });


const getFilterData = (param) => fetch('https://rickandmortyapi.com/api/character' + `/${param}`)
    .then((response) => response.json())
    .then((data) => {
        render(data.results)
    });

const getDataById = (arrID) => fetch('https://rickandmortyapi.com/api/character' + `/${arrID}`)
    .then((response) => response.json())
    .then((data) => {
        render(data.results)
    });


document.querySelector('.form-container').addEventListener('click', (event) => {
    let path = event.target.id
    if (path === 'male' || path === 'female') {
        let param = '?gender=' + path
        getFilterData(param)
    }
    if (path === 'alive' || path === 'dead') {
        let param = '?status=' + path
        getFilterData(param)
    }
})

let template = (item) => {

    let addClass = ''

    if (item.status === 'Dead') {
        addClass = 'dead'
    }

    return `<div class="card">
<div class="card-info">
    <div class="title">
        <h1>${item.name}</h1>
        <div class="status">
            <div class="live-status ${addClass}"></div>
            <p>${item.status}</p>
        </div>
    </div>
    <div class="content">
        <p>${item.location.name}</p>
    </div>
</div>
<div class="card-image">
    <img src="${item.image}" alt="Img">
</div>
</div>`
}


function render(items) {
    const html = items.map(item => template(item)).join('')
    document.body.querySelector('.container').innerHTML = html
}

getData()