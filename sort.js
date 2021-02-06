var arr = [4,8,4,3,4,1,2,3,-8,-6,-4,7,20,10]
arr.sort(function(a,b){
    if (a>b){
        return 1
    }
    else if(a<b){
        return -1
    }
    else {
        return 0
    }
})

console.log(arr)

var persons = [
    {
        name : 'A',
        age : 24
    },
    {
        name : 'B',
        age : 34

    },
    {
        name : 'C',
        age : 12
    },
    {
        name : 'D',
        age : 19
    }
]

persons.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{
        return 0
    }
})
console.log(persons)