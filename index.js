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