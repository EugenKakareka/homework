class Emploee {
    constructor(employee) {
        this.id = employee.id
        this.name = employee.name
        this.surname = employee.surname
        this.salary = employee.salary
        this.workExperience = employee.workExperience
        this.isPrivileges = employee.isPrivileges
        this.gender = employee.gender
    }

    getFullName() {
        return this.surname + ' ' + this.name
    }
}

let createEmployesFromArr = (arr) => {
    let employers = [];
    arr.forEach((employee) => employers.push(new Emploee(employee)))
    return employers;
};
const employeeConstructArr = createEmployesFromArr(employeeArr)

const getFullNamesFromArr = (arr) => {

    return arr.map(item => item.getFullName())
}

const fullNameList = getFullNamesFromArr(employeeConstructArr)

const getMiddleSalary = (arr) => {

    let salarySum = 0

    for (let i = 0; i < arr.length; i++) {
        salarySum += arr[i].salary
    }
    return Math.round(salarySum / arr.length)
}

const middleSalary = getMiddleSalary(employeeConstructArr)