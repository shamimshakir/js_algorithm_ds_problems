
// custom array flat
function flattenArray(arr){

  let initialValue = []

  return arr.reduce((total, value) => {
    return total.concat(Array.isArray(value)?flattenArray(value):value)
  }, initialValue)
}
let res = flattenArray([[["a"]], [[[[[["b"]]]]]]])
console.log(res) // ["a", "b"]
