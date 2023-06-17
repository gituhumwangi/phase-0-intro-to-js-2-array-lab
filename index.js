// Write your solution here!
const cats = ["Milo", "Otis", "Garfield",]
function destructivelyAppendCat () {
    cats.push("Ralph")
}
function destructivelyPrependCat () {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat () {
    cats.pop()
}
function destructivelyRemoveFirstCat () {
    cats.shift()
}
function appendCat (name) {
    const appendkitten = [...cats, name]
    return appendkitten
}
function prependCat (name) {
    const prependKitten = [name, ...cats]
    return prependKitten
}
function removeLastCat () {
    const last = cats.slice(0, cats.length - 1)
    return last
}
function removeFirstCat () {
    const myFirst = cats.slice(1)
    return myFirst
}