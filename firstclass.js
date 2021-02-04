function add(a,b){
    return a + b
}
//function can be stored in a variable
var sum = add

console.log(sum(4,5))

//a function can be stored in an array

var arr =[]
arr.push(add)
console.log(arr)
console.log(arr[0](5,3))

//a function can be stored in an object 
var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(7,9))

//we can create a function as we need

setTimeout(function (){
    console.log('i am done')
},1000)

