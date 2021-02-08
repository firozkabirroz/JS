function greet(msg){
    function greetings(name){
        return msg + ' ,' + name + '!'
    }
    return greetings

}

var gm = greet('Good Morning')
var gn = greet("Good Night")
var hello = greet('Hello')

var msg = gm('Firoz Kabir')

console.log(msg)
console.log(gn('Twinkle cats'))
console.log(msg)
console.log(hello('Segufa Taranjum'))