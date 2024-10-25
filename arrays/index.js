


// var arr=[1,2,3,4,5]

// console.log(arr)
// console.log([0])

// //starting
// arr.unshift(13)

// console.log(arr)

// //ending

// arr.push(7)
// console.log(arr)

// // anywhere 
// arr.splice(0,0,1)

// console.log(arr)
// arr.splice(0,2,0)
// console.log(arr)


//how to remove an individual items 
// arr.shift()
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.splice(arr.length-1,1)

// console.log(arr)


// arr.splice(0,arr.length)
// console.log(arr)

// arr=[]
// console.log(arr)

// arr.length=0
// console.log(arr)

//how to find array itemms


// var arr=[1,2,5,3,4,5,'asm']

// console.log(arr.indexOf(5))
// console.log(arr.lastIndexOf(5))
// console.log(arr.lastIndexOf(0))

// console.log(arr.includes(3))
// console.log(arr.includes(0))

// var arr=[{course:'react'},{name:'arun'},[1,2,3,4]]

// var result=arr.find((obj)=>{
// return obj.course==='react'
// }
// )
// console.log(result)

//how to loop  array items 
var arr=[1,2,3,4,'dddc']

for(as of arr){
    console.log(as)
}


 arr.forEach((v,i) => {
    console.log(v,i)
    return 1
});


//both values and index numbers

// how to combine array

// var arr1=[1,2,3,4,5]
// console.log(arr1)
// var arr2=['s',{name:'arun'}]
// console.log(arr2)
// console.log(arr1.concat(arr2))



// var combinearr=[...arr,...arr1,...arr2]
// console.log(combinearr)

// var originalas=['sachin',{road:302},function play(){console.log(play)}]
// normal copy
// var copiedas=originalas

// console.log(copiedas)
// copiedas[0]='kohli'
// console.log(copiedas)
// console.log(originalas)
//json string will convert array to string and json parse wil convert back 

//shallow copy

// var arr=[1,3,4,67,876]

// var result=arr.some((item) => {
//     return item>0
// })
// console.log(result)

// var arr3=[-1,232434,54565]

// var s=arr3.every((item) =>{
//     return item>0
// })
// console.log(s)

//filter

// var item =[1,2,3,'s','s',234,667]
//   var arun=item.filter((as)=>{
//     return as>0
//  })
//  console.log(arun)
//  console.log(item)



//  //map
//  var arr=[2,3,45,6,8,9]
//  console.log(arr)
//  var set=arr.map((item)=>{
//     return item+23
//  })
//  console.log(set)


 //reduce method

//  var aru=[12,3,5,67,5,4,3]

//  var sai=aru.reduce((cum,cur)=>{
//     return console.log(cum,cur)
 

//  },0)

//  console.log(sai)
//  console.log(aru)



// how to conver array into string

// var arr=[1,2,3,4,5]
// console.log(arr)
// console.log(typeof arr)


// var as=arr.join()
// console.log(as)
// console.log(typeof as)

// console.log(as.split(''))


// var arr=[1,2,3,4,5,6,5,6,3]

// console.log(arr)


// // var uniquearray=[...new Set(arr)] // set wiil remove the duplicates and make it to one 
// // console.log(uniquearray)

// var uniquearray=[]
// function findarray(arr){
//     for(var value of arr){
//         console.log(value)
//         if(uniquearray.indexOf(value)===-1){
//         uniquearray.push(value)}
//     }

// }
// findarray(arr)
// console.log(uniquearray)

// //how to  flatten array / converting multi dimensional array into single dimensional array 
var arr=[1,2,3,4,['s','sai','arun',['hi',1,3]],[1,2,3,4]]

// //dimension will increase by moving it to nestesd by placing side by side it will be not consider as dimension 

// // var flate=arr.flat(Infinity)
// // if yo donot know the dimension pass infinity
// var flate=arr.flat(2)
// // if you know the dimension pass one number less than the dimension it will show the single value 
// console.log(flate)

var flattenArr = []
function flatten(arr) {
  console.log(arr)
  for (var value of arr) {
    console.log(value)
    if (Array.isArray(value)) {
     flatten(value)
    } else {
      flattenArr.push(value)
   }
  }
}

flatten(arr)
console.log(flattenArr)

//map vs for each 
// map will retrun and create the new array where as for each doesnot 

// var arr=[1,2,3,4,5]
// var mapresult=arr.map((value)=>{
//     return value+12
// })
// console.log(mapresult)


// var as=[2,3,45,78,9]

// var each=arr.forEach((value)=>{
//     return value
// })
// console.log(each)

//fill()

var arr=['sai','arun',1,2,5]
console.log(arr)
var obj=arr.fill("pavan", 2,5)
console.log(obj)


//at()

var s=[1,2,3,4,56]
console.log(arr)

var oj=arr.at(0)
console.log(oj)

// these are just like charat in string object 


//array.form CONVERting of iterable data  to array 
var str=new String('hi')
console.log(str)
console.log(typeof str)
console.log(Array.isArray(str))

var obj=Array.from(str)
console.log(str)
console.log(typeof str)
console.log(Array.isArray(obj))






function test(){

    console.log(arguments)

    console.log(typeof arguments)
    console.log(Array.isArray(arguments))
    var arr1=Array.from(arguments)
    console.log(arr1)
    console.log(Array.isArray(arr1))

}
test(1,23,4,5)