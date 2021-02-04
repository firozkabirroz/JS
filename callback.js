// function sample (a,b){
//     var c = a+b
//     var d = a-b
//     var result = sum(c,d)
//     return result

// }

// function sum(a,b){
//     return a+b

// }

// console.log(sample(5,8))

function sample (a,b ,callback){
    var c = a+b
    var d = a-b
    var result = callback(c,d)
    return result

}

function sum(a,b){
    return a+b

}

var result = sample(5,4,sum)
console.log(result)

var result2 = sample(5,8, function(c,d){
    return c-d
})

console.log(result2)

var result3 = sample(3,6,function(c,d){
    return c*d
})
console.log(result3)