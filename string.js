var str = 'i am firoz kabir'

var str2 = String('i am done')
console.log(str2)

var str3 = 'this is a \"String\"' //this is example of notation 
console.log(str3)

 var a = 'i am'
 var b= ' Firoz kabir'

 var c = a.concat(b)

 console.log(c)

 //substr
 var d = c.substr(7,3)
 var e = c.substr(7)
 console.log(d)
 console.log(e)

 // charecter at any position

 console.log(c.charAt(3))

//Start with function

console.log(c.startsWith('i am'))
//End with
console.log(c.endsWith('r'))

//upper case function

console.log(a.toUpperCase())

//trim function
console.log('     firoz kabi r      '.trim())

//split 
console.log(c.split(' '))

//string length
var length =0
while(true){
    if(str.charAt(length)== ''){
        break
    }
    else{
        length++
    }
}
console.log(length)