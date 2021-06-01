var rectangle = function(width,height){
    
this.width = width
this.height = height

this.draw = function(){
    console.log('i am rectangle')
    this.printProperties()
    console.log(this)
}
this.printProperties = function(){
    console.log('my width is' +this.width)
    console.log('my height is' +this.height)
}
}

// var rect2 = new rectangle(23,45)
// rect2.draw()

function myNew(constructor){
    var obj = {}
    Object.setPrototypeOf(obj,constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj,argsArray.slice(1))

    return obj
}

var rect3 = myNew(rectangle,45,65)
rect3.draw()