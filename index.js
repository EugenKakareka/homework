//task 1
const searchCandidatesByPhoneNumber = phone => {
    phone = phone.replace(/[^\d]/g, '')
    let list = []
    condidateArr.forEach(item => {
        if (item.phone.replace(/[^\d]/g, '').includes(phone)) list.push(item)
    });

    console.log(list)
}

//task2

const getCandidateById = id => {
    condidateArr.forEach(item => {
        if (item._id === id) {
            const arrFromDate = item.registered.split('-').reverse()
            const [day, month, year] = [arrFromDate[0].substr(0, 2), arrFromDate[1], arrFromDate[2]]
            item.registered = [day, month, year].join('/')
            console.log(item)
        }
    })
}

//task3

const sortCandidatesArr = sortBy => {
    const stringTonumber = string => {
        return (string.replace(/[^\d]/g, '')) / 100
    }
    if (sortBy === undefined) {
        return condidateArr
    }
    if (sortBy === 'asc') {
        let arr = [...condidateArr].sort((a, b) => stringTonumber(a.balance) - stringTonumber(b.balance))
        return arr

    }
    if (sortBy === 'desc') {
        let arr = [...condidateArr].sort((a, b) => stringTonumber(b.balance) - stringTonumber(a.balance))
        return arr
    }
}

//task4

const getEyeColorMap = () => {

    let eyeColorArr = condidateArr.map(item => item.eyeColor);

    eyeColorArr = eyeColorArr.filter(function(item, pos) {
        return eyeColorArr.indexOf(item) == pos;
    })

}