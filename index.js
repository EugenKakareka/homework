class Student {
    constructor(enrollee) {
        this.id = Student.id++;
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;
        this.listOfStudents = Student.listOfStudents.push(this);
        this.isSelfPayment = true;

    }
    static id = 1;
    static listOfStudents = []
}