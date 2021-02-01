// var obj = {}
// obj.x = 10

// console.log(obj)

var point = {
    x: 10,
    y: 20 
}

point.z=30

console.log(point)

var obj1 = Object()

obj1.a= 12

console.log(obj1)

var obj2 = new Object()
obj2.e = 40
console.log(obj2)

console.log(point.x)

console.log(point.x + point.y)

console.log(point['x'])

delete point.x

console.log(point)

//object compare 

var objectCompare = {
    a:20,
    b:10
}
var objectComare2 ={
    a:20,
    b:10

}

console.log(objectCompare==objectComare2)

if(objectCompare.a==objectComare2.a && objectCompare.b==objectComare2.b){
    console.log(true)

}
else{
    console.log(false)
}

//compare by json
console.log(JSON.stringify(objectCompare)== JSON.stringify(objectComare2))