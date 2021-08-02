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

function getArray() {
    const amount = 9;

}

getArray()