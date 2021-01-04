var date = new Date()

// 0 - sunday , 1- monday , 2- thuesday

var today = date.getDay()

switch(today){
    case 0:
        console.log('today is sunday')
        break

    case 1:
        console.log('today is monday')
        break

    case 2:
        console.log('today is thuesday')
        break

    case 3:
        console.log('today is wednesday')
        break
    case 4:
        console.log('today is thursday')
        break
    case 5:
        console.log('today is Friday ')
        break
    case 6:
        console.log('today is saturday')
        break

    default:console.log('not a valid number')
}