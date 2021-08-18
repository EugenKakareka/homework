//task 1
const arr = ['Vasya', 'Petya', 'Alexey']

function removeUser(arr, pos) {
    arr.splice(pos, 1)
    console.log(arr)
}

removeUser(arr, 1)

//task 2

const obj = { name: 'Vasya', age: 1 }

function getAllKeys(obj) {
    console.log(Object.keys(obj))
}

getAllKeys(obj)

//task 3

const obj1 = { name: 'Vasya', age: 1 }

function getAllValues(obj) {
    console.log(Object.values(obj))
}

getAllValues(obj)

//task 4

const obj2 = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const arr1 = [{
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

function insertIntoarr(obj, id) {
    let index = arr.findIndex(item => item.id === id)
    arr.splice(index, 0, obj)
}


insertIntoarr(obj, 2)
console.log(arr)

insertIntoarr(secondObj, 1)
console.log(arr)

//task 5

class Condidate {
    constructor(obj) {
        Object.assign(this, obj)
    }

    state() {
        let state = this.address.split(',')
        return state[2]
    }
}

//task 6

function companyNames(arr) {
    let set = new Set()
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i].company)
    }
    return set
}

const getCompanyNames = companyNames(condidateArr)

//task 7

getUsersByYear(2017)