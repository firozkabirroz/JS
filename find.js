var arr = [1,2,3,2,3,5,6,4,5,6,7,5,4,9]

// var result = arr.find(function(value){
//     return value ==10
// })

// console.log(result)

// var resultIndex = arr.findIndex(function(value){
//     return value == 5
// })
// console.log(resultIndex)

function myFind(arr,cb){
    for(var i =0;i<arr.length;i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
}

var result = myFind(arr,function(value){
    return value == 5
})

console.log(result)