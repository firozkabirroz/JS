var rect = {
    width: 1000,
    height: 50,

    draw: function(){
        console.log('i am a rectangle')
       this.printProperties()
    },
    printProperties: function(){
        console.log('My width is '+ this.width)
        console.log('My height is '+ this.height)
    }
}

 rect.draw()

// rect.width=100

// rect.draw()

function myFunc(){
    console.log(this)
    
}
new myFunc()

var another ={
    width: 34,
    height: 54,
    print: rect.printProperties
}

another.print()