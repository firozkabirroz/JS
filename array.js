var arr = [1,4,3,5,6]

arr[5]=6
arr[10]=11

console.log(arr)
console.log(arr[3])
arr[2]=23
console.log(arr)
console.log(arr.length)
var arr2 = Array(1,2,3)
console.log(arr2)

arr2.push(9) //push a number in array last index
arr2.unshift(7) //insert a data in first of the array

console.log(arr2)

arr2.splice(3,0,9) // it insert data at index 3 and remove 0 data
console.log(arr2)

arr2[5]=undefined // it takes a index as undefined  
console.log(arr2)