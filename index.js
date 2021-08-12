class Student {
    constructor(enrollee) {
        this.id = Student.id++;
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;
        this.isSelfPayment = Student.getSelfPayment(this)
    }
    static id = 1;
    static listOfStudents = []
    static limit = 5
    static getSelfPayment(student) {

        if (student.ratingPoint < 800) {
            this.listOfStudents.push(student)
            return true
        }

        if (student.ratingPoint >= 800 && this.listOfStudents.length < this.limit) {
            this.listOfStudents.push(student)
            return false

        }
        if (student.ratingPoint >= 800 && this.listOfStudents.length >= this.limit) {
            let countStudentWithoutPayment = 0
            for (let i = 0; i <= this.listOfStudents.length - 1; i++) {

                if (this.listOfStudents[i].isSelfPayment === false) {
                    countStudentWithoutPayment++;
                }

            }
            console.log(countStudentWithoutPayment)

            if (countStudentWithoutPayment < this.limit) {
                this.listOfStudents.push(student)
                return false

            }

            if (countStudentWithoutPayment >= this.limit) {
                function sortByRating(arr) {
                    arr.sort((a, b) => b.ratingPoint - a.ratingPoint || b.schoolPoint - a.schoolPoint);
                }
                sortByRating(this.listOfStudents)

                if (this.listOfStudents[this.limit - 1].ratingPoint < student.ratingPoint) {
                    this.listOfStudents[this.limit - 1].isSelfPayment = true
                    this.listOfStudents.push(student)
                    return false

                }

                if (this.listOfStudents[this.limit - 1].ratingPoint > student.ratingPoint) {
                    this.listOfStudents.push(student)
                    return true
                }
                if (this.listOfStudents[this.limit - 1].ratingPoint === student.ratingPoint) {
                    if (this.listOfStudents[this.limit - 1].schoolPoint < student.schoolPoint) {
                        this.listOfStudents[this.limit - 1].isSelfPayment = true
                        this.listOfStudents.push(student)
                        return false

                    }

                    if (this.listOfStudents[this.limit - 1].schoolPoint > student.schoolPoint) {
                        this.listOfStudents.push(student)
                        return true
                    }
                }

            }
        }
    }
}



class CustomString {
    reverse(str) {
        if (!str) return str
        let reverse = ''
        for (let i = str.length - 1; i >= 0; i--) {
            reverse += str[i]
        }
        return reverse
    }

    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    ucWords(str) {

        let newStr = ''

        for (let i = 0; i < str.length; i++) {
            if (str[i] !== ' ' && str[i - 1] !== ' ') {
                newStr += str[i]
            }

            if (str[i] === ' ') {
                newStr += str[i]
                newStr += str[i + 1].toUpperCase()
            }

            if (str[i - 1] === ' ') {
                continue
            }
        }

        return this.ucFirst(newStr)
    }
}