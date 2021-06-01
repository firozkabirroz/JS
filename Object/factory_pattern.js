
var creatObject = function(width,height){
    return {
        width: width,
        height: height,
    
        draw: function(){
            console.log('i am a rectangle')
           this.printProperties()
        },
        printProperties: function(){
            console.log('My width is '+ this.width)
            console.log('My height is '+ this.height)
        }
    }
}

var obj1 = creatObject(12,34)
obj1.draw()

var obj2= creatObject(200,344)
obj2.draw()