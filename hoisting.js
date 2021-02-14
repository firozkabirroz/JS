var a =100

// newPrint(a)

print(10)

var newPrint = print
newPrint(45)

 function print(a){
     console.log(a)
 }

 print(a)

 // creational phase
 // a = undefined
 //newPrint = undefined
 // print = ref 

 //executional phase
 //a = 100
 //a =100
 // newPrint = ref 

 abc()

 function abc(){
     console.log(' I Am abc function')
 }

 // function expretion 

 var newAbc = function (){
     console.log('I Am new abc Function')
 }

 newAbc()