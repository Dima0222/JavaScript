const names = ['Владилен', 'Елена', 'Игорь', 'Ксения']

// names.push('Алена')
// names.unshift('Алена')

// const firstName = names.shift()
// const name = names.pop()
//console.log('Names:', names)

//const reversed = names.toReversed() 
//console.log(names.reverse())
//const letters = ['e', 'c', 'd', 'b', 'a' ]
//console.log(letters.sort())
//console.log(letters)

//console.log(names.splice(0, 2))
//console.log(names.toSplice(0, 2))
//console.log(names)

const greateWoman = 'Елена'
const index = names.indexOf(greateWoman)
//console.log(index)
const newNames = names.with(index, 'Елена Великая')
//names[index] = 'Елена Великая'
//console.log(names[index])
//console.log(names)
//console.log(newNames)

/*const capitalNames = names.map(function (name, index) {
    if (index === 1) {
        return 'Елена Великая'
    }
    return name 
})
console.log(capitalNames) */

//console.log(names.includes('Игорь'))
//console.log(names.indexOf('Игорь') )

const people = [
    {name: 'Владилен', budget: 4200}, 
    {name: 'Елена', budget: 15100},
    {name: 'Игорь', budget: 300},
    {name: 'Ксюша', budget: 7520},
]

//console.log(people.indexOf({name: 'Ксения', budget: 7520 }))

/*let findedPerson

for(let person of people) {
    if (person.budget === 7520) {
        findedPerson = person
    }
}*/

// const finded = people.findIndex(function (person) {
//    return person.budget === 7520
// })

//console.log(people.with(finded, 42))

// const finded = people.find((p) => p.budget === 7520)
// console.log(finded)



/* let sumBudget = 0
const filtered = people.filter(function(p) {
    return p.budget > 5000
})
console.log(filtered) 
Filtered.forEach(function(p) {
    sumBudget = sumBudget + p.budget
}) */

/* const byBudget = (p) => p.budget > 5000
const pickBudget = (p) => p.budget

const sumBudget = people
    .filter(byBudget)
    .map(pickBudget)
    .reduce((acc, p) =>acc + p, 0) 

console.log(sumBudget) */

/* const string = 'Привет, как дела?'
const reversed = string
.split('')
.toReversed()
.join('').
split('')
.filter((c) => c !=='!')
.join('')

console.log(reversed) */
