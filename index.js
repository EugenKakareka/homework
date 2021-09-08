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