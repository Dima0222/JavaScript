// Theory
// const array = [1, 2, 3, 5, ]

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const ListElement = document.getElementById('list')

// console.log(inputElement.value)

const notes = ['Записать блок про массивы', 'рассказать теорию обьектов']

function render() {
    ListElement.insertAdjacentHTML(
        'beforeend', 
        getNoteTempLate(notes[0])
    )
    ListElement.insertAdjacentHTML(
        'beforeend', 
        getNoteTempLate(notes[1])
    )
}

render()

createBtn.onclick = function () {
if (inputElement.value.length === 0) {
    return 
}
     //ListElement.innerHTML = 
    ListElement.insertAdjacentHTML(
        'beforeend',
        getNoteTempLate(inputElement.value)
    )
    inputElement.value = ''
}

function getNoteTempLate(title) {
    return `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span>${title}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
            </span>
        </li>
    `
}