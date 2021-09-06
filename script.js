 let field = prompt('количество полей')

 let form = document.querySelector('form')

 function addField(i) {
     let input = document.createElement('input')
     input.classList.add('input-item')
     input.setAttribute('type', 'text')
     input.setAttribute('value', `input${i}`)
     form.prepend(input)
     if (i === field) {
         input.classList.add("margin-zero")
     }
 }

 function setBackground() {
     let oddInput = form.querySelectorAll('.input-item:nth-child(odd)');
     oddInput.forEach(item => item.style.backgroundColor = 'yellow')
 }

 function setPlaceholder() {
     let inputPlace = form.querySelectorAll('.input-item:nth-child(3n+3)');
     inputPlace.forEach(item => {
         item.removeAttribute('value')
         item.setAttribute('placeholder', 'Some text')
     })
 }

 for (let i = field; i >= 1; i--) {
     addField(i)
 }

 setBackground()
 setPlaceholder()

 //task2
 let task2 = document.createElement('div')
 form.after(task2)

 let btnStart = document.createElement('button')
 btnStart.innerText = "Start"
 let btnStop = document.createElement('button')
 btnStop.innerText = "Stop"

 task2.append(btnStart)
 task2.append(btnStop)

 let h2 = document.createElement('h2')

 let time = () => h2.innerText = `${ new Date().toLocaleTimeString()}`
 let timer = () => timer = setInterval(time, 1000)

 task2.append(h2)

 btnStop.addEventListener('click', () => clearInterval(timer))

 btnStart.addEventListener('click', timer)

 //task3

 const replaceFooter = () => {
     const wrapper = document.getElementById('wrapper')
     const footer = document.getElementById('footer')
     wrapper.append(footer);
 }

 replaceFooter()

 const setBackgroundParagraph = () => {
     const main = document.getElementById('main')
     const lastParagraph = main.lastChild
     lastParagraph.previousSibling.style.backgroundColor = 'red'

 }

 setBackgroundParagraph()

 //task4

 const INGREDIENTS = {
     "cocoa": ["cocoa powder", "milk", "sugar"],
     "cappuccino": ["milk", "coffee"],
     "smoothie": ["banana", "orange", "sugar"],
     "matcha frappe": ["matcha", "milk", "ice"]
 };

 let menu = document.getElementById('menu')

 menu.addEventListener('click', function(event) {

     let findlist = event.target.querySelector('ol')


     if (findlist) {
         findlist.parentNode.removeChild(findlist)
     } else {
         let key = event.target.textContent
         const ingredientsList = document.createElement('ol')
         event.target.append(ingredientsList)

         INGREDIENTS[key].forEach(item => {
             let listItem = document.createElement('li')
             listItem.innerText = `${item}`
             ingredientsList.append(listItem)
         })
     }
 })