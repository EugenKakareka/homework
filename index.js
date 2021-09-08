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