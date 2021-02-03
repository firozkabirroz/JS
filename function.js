function add(){
    console.log("hello function")
    var a =10
    var b=23
    console.log(a+b)
}

add()

// argument in function 

function add1(a,b){
    var result = a+b
    console.log(result)
}

add1(10,33)

function addAll(){
    var sum =0
    for(var i= 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(2,3,4,5,6)
addAll(2,3,45,65,32,23,45,6,5,4)

//return 
function addReturn(){
    var sum =0
    for(var i= 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

var a = addReturn(2,3,4,54,32,34)

console.log(a)

//function expretion 

var addition = function(a,b){
    return a+b
    
}


console.log(addition(23,43))

//setTimeout function

setTimeout(function(){
    console.log('i will call you after 5 sec')

},5000)

//inner function

function outerFunction(greet,name){
    function innerFunction(){
        console.log(greet,name)
    }

    innerFunction()
}

outerFunction('i am','firoz')

//inner return function

function something(greet,name){
    function getFirstName(){
        if (name){
            return name.split(' ')[0]
        }
    }
    var message = greet +' '+getFirstName()
    console.log(message)
}

something('Good Morning','Firoz')

//scope in js
var a = 'abc'

function x(){
    var a =20
    function y(){
        var a = 10 
        console.log(a)
    }
    console.log(a)
    y()

}
x()