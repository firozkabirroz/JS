var arr = [1,2,3]
// var aqrArr = arr.map(function(value,index,arr){
//     // return Math.random() *100
//     return value*value
// })

// console.log(arr)
// console.log(aqrArr)

function myMap(arr,cb){
    var newArr = []
    for (var i=0;i<arr.length;i++){
        var temp = cb(arr[i],i,arr)
        newArr.push(temp)
    }
    return newArr
}

// console.log(myMap(arr))

var qb = myMap(arr, function(value){
    return value * value * value
})
console.log(qb)