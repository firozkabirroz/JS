var arr = [1,2,3,4,5,6,7,8]

// var sum = arr.reduce(function(prev,curr){
//     return prev+curr
// }, 100)

// var max = arr.reduce(function(prev,curr){
//     return Math.max(prev,curr)
// },0)

// console.log(sum,max)

function myReduce(arr,cb,init){
    for(var i =0 ;i<arr.length ;i++){
        init = cb(init , arr[i])
    }
    return init
}

var sum = myReduce(arr, function(prev,curr){
    return prev + curr
},0)

var max = myReduce(arr,function(prev,curr){
    return Math.max(prev,curr)
},0)

console.log(sum,max)