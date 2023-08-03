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

const capitalNames = names.map(function (name) {
    const newName = name + '!'
    return newName
})
console.log(capitalNames)
