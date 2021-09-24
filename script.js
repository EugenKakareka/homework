const mainArr = [
    { start: 0, duration: 15, title: "Exercise" },
    { start: 25, duration: 30, title: "Travel to work" },
    { start: 30, duration: 30, title: "Plan day" },
    { start: 60, duration: 15, title: "Rewiew yesterday's commits" },
    { start: 100, duration: 15, title: "Code rewiew" },
    { start: 180, duration: 90, title: "Have lunch with John" },
    { start: 360, duration: 30, title: "Skype call" },
    { start: 370, duration: 45, title: "Follow up with designer" },
    { start: 405, duration: 30, title: "Puch up branch" }
]

let schedule = [...mainArr]

//let id=Math.random().toString(36).substr(2, 5);

// function addId(arr) {
//     return arr.map(function(obj, index) {
//         return Object.assign({}, obj, { id: index });
//     });
// };

// let schedule = addId(mainArr)


const eventsField = document.querySelector('.events')

const toHTML = (schedule) => `
<div class='event' style='top:${schedule.start*2}px; height:${schedule.duration*2}px'>
<p>${schedule.title}</p>
</div>`

function render() {
    const html = schedule.map(item => toHTML(item)).join('')
    eventsField.innerHTML = html
}

render()

function timeToNumber(str) {
    let arr = str.split(':')
    if(arr[0].length>2||arr[1].length>2){
        console.log('ошибка')                                                 //!!!!!!!!!
    } else {
        let num = (arr[0] - 8) * 60 + parseInt(arr[1])
        return num
    }
}

function numberTotime(num) {
    let hour = Math.floor(num / 60)

    let minute = (num % 60)
    if (minute < 10) {
        minute = '0' + minute
    }

    let time = 8 + hour + ':' + minute
    return time
}


const changeEventTemplate = (item) => `
<form id="form-event">
    <input type="text" id="form-title" name="title" value="${item.title}">
    <input type="text" id="form-start" name="start" value="${numberTotime(item.start) }">
    <input type="text" id="form-end" name="end" value="${numberTotime(item.start+item.duration) }">
    <button type="button">Edit</button>
    <button type="button">Delete</button>
</form>`

const addEventTemplate = `
<form id="form-event">
    <input type="text" id="form-title" name="title" placeholder="Event title" >
    <input type="text" id="form-start" name="start" placeholder="Start time" >
    <input type="text" id="form-end" name="end" placeholder="End time" > 
    <button type="button">Add event</button>
</form>
`

let modal = document.querySelector('.modal')

let eventModal = document.querySelector(".events")

let timeModal = document.querySelector(".time")

timeModal.addEventListener("click", function() {
    modal.classList.add('active')
    modal.insertAdjacentHTML('afterbegin', addEventTemplate)
})

function findEvent(event) {
    let id = parseInt(event.target.style.top) || parseInt(event.target.parentElement.style.top)
    let findEvent = schedule.find(item => item.start === id / 2)
    return findEvent   
}

eventModal.addEventListener("click", function(event) {
    let modalForm = changeEventTemplate(findEvent(event))
    if(modalForm){
        modal.classList.add('active')
        modal.insertAdjacentHTML('afterbegin', modalForm)
    }   
})


function close(){
        modal.classList.remove("active")
        while (modal.firstChild) {
        modal.removeChild(modal.firstChild)
    }}

modal.addEventListener("click", function(event) {
    let titleInput = modal.querySelector('input[name="title"]')
    let startInput = modal.querySelector('input[name="start"]')
    let endInput = modal.querySelector('input[name="end"]')

    
    if (event.target === this) {
        this.classList.remove("active")
        while (this.firstChild) {
            this.removeChild(this.firstChild)
        }
    }
    if (event.target.textContent === 'Delete') {

        schedule = schedule.filter((item) => item.start !== timeToNumber(startInput.value))
        render()
        close()
        }

    if (event.target.textContent === 'Edit') {

    }

    if(event.target.textContent === 'Add event'){

        let start = timeToNumber(startInput.value+'')
        let end = timeToNumber(endInput.value+'')
        let title = titleInput.value

        if(startInput.value===''||endInput.value===''||titleInput.value===''){
            console.log('ошибка')
            return
        }
        if(end>540){
            console.log('ошибка')
            return
        }
        if(start<0){
            console.log('ошибка')
            return
        }

        if(end-start<0){
            console.log('ошибка')
            return
        }

        let setEvent = {
            start: start,
            duration:end-start,
            title: title
        }
        schedule.push(setEvent)
        console.log(schedule)
        render()
        close()
    }
})