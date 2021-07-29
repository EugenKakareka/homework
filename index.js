//task1

function FizBuz(num) {
    for (let i = 1; i <= num; i++) {
        switch (true) {
            case i % 3 == 0:
                console.log('FizBuz')
                break;
            case i % 2 == 0:
                console.log('Fiz')
                break;
            case i % 2 !== 0:
                console.log('Buz')
                break;
        }
    }
}


FizBuz(10)

//task2

let factorial = function(n) {
    return (n != 1) ? n * factorial(n - 1) : 1
}
console.log(factorial(7))

//task3

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

function howMuchPaper() {

    let total = consumptionPerWeek * weeksAmount;

    let howMuchPaper = total / sheetsInReamPaper + (1 - (total % sheetsInReamPaper) / sheetsInReamPaper);

    console.log(`На ${weeksAmount} недель(ю) надо ${howMuchPaper} пачек бумаги`)
}

howMuchPaper()

//task4

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;

function findRoom() {
    let roomsOnPorch = roomsOnFloor * floors
    let porch = roomNumber / roomsOnPorch
    if (porch > 1) {
        porch = porch + (1 - roomNumber % roomsOnPorch / roomsOnPorch)
    }
    if (porch < 1) {
        porch = 1
    }

    let lastRoomOnPorch = porch * roomsOnPorch
    let i = floors
    for (; i > 0; i--) {

        for (let j = roomsOnFloor; j > 0; j--) {
            lastRoomOnPorch--
        }
        if (lastRoomOnPorch < roomNumber) break

    }
    console.log(`квартира №${roomNumber} находится в ${porch} подъезде на ${i} этаже`)
}

findRoom()

//task5

const medianNumber = 8

function pyramid() {

    let arr = []
    let pyramid = []

    for (let i = 0; i < (medianNumber * 2) - 1; i++) {
        arr[i] = '#';
    }

    for (let i = 0; i < medianNumber - 1; i++) {
        delete arr[i]
        arr[i] = '-'
        delete arr[(arr.length - 1) - i]
        arr[(arr.length - 1) - i] = '-';

        let newArr = arr.slice()

        pyramid.push(newArr)

    }

    pyramid.reverse()
    for (i = 0; i < pyramid.length; i++) {
        console.log(pyramid[i].join(''))
    }
}

pyramid()