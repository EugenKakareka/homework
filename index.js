//task1

const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

function objToArray() {
    let template = ''
    const result = []
    for (key in citiesAndCountries) {

        template = `${key} - это ${citiesAndCountries[key]}`

        result.push(template)

    }
    console.log(result)
}

objToArray()

//task2

const amount = 12

function getArray(amount) {

    if (amount % 3 == 0) {
        const subarraySize = 3
        let array = []
        let slicedArray = []

        for (let i = 1; i <= amount; i++) {
            array.push(i)
        }

        for (let i = 0; i < array.length; i += subarraySize) {
            slicedArray.push(array.slice(i, i + subarraySize));
        }
        console.log(slicedArray)
    } else {
        console.log('Максимальное значение должно делиться на 3 нацело.')
    }
}

getArray(amount)

//task3

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(day, lang) {

    return namesOfDays[lang][day - 1]
}

getNameOfDay(1, 'ru')



//task4

function arrSumTwo(arr) {
    if (arr.length < 4) {
        console.log("Массив должен содержать минимум 4 положительных целых чисел")
        return
    }

    let arrSort = arr.sort((a, b) => a - b)

    for (let i = 0; i < arrSort.length - 1; i++) {
        if (arrSort[i] === arrSort[i + 1]) {
            console.log('В массиве не могут содержаться одинаковые числа.')
            return
        }
    }

    let sum = arrSort[0] + arrSort[1]

    console.log(sum)
}