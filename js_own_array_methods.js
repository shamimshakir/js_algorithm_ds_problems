let arr = [2, 3, 4, 6, 8, 14]

Array.prototype.myMap = function(callback){
    let mapped = []
    for(let i = 0; i < this.length; i++){
        mapped.push(callback(this[i]))
    }
    return mapped
}
let mappedArr = arr.myMap((item) => item ** 2)
//console.log(mappedArr) //  [4, 9, 16, 36, 64, 196]


Array.prototype.myFilter = function(callback){
    let filterd = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            filterd.push(this[i])
        }
    }
    return filterd
}
let filterd = arr.myFilter(item => item > 4)
// console.log(filterd)


Array.prototype.myReduce = function(reducerFunc, initialValue){
    let accumulator = initialValue === undefined ? 0 : initialValue

    for(let i = 0; i < this.length; i++){
        accumulator = reducerFunc(accumulator, this[i])
        console.log(accumulator)
    }

    return accumulator
}
let res = arr.myReduce((acc, value) => {
    if(value > 5)acc.push(value)
    return acc
}, [])
console.log(res)

