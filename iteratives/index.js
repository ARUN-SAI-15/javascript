// var iterable =[1,2,3,4,5]

// console.log(iterable)  
// var x=iterable[Symbol.iterator]()

// console.log(x)

// console.log(x.next(1))
// console.log(x.next(2))
// console.log(x.next(3))
// console.log(x.next(4))
// console.log(x.next(5))
// console.log(x.next(6))

// for(var value of iterable){
//     console.log(value)
// }


// var obj= {
// name:'sai',
// age:40,
// city:'ongole'
// }


// obj[Symbol.iterator]=function(){
//     var keys=Object.keys(obj)
//  var count=0

//  var next=()=>{
//     if (count>=keys.length)

//     return {value:undefined ,done:true}
//     else{
//         return{done:false,value:this[keys[count++]]}
//     }
//  } 
  
//     return {next}
// }

// console.log(obj)  
// var iterableobj=obj[Symbol.iterator]()


// console.log(iterableobj)

// console.log(iterableobj.next(1))
// console.log(iterableobj.next(2))
// console.log(iterableobj.next(3))
// console.log(iterableobj.next(4))



// for (value of obj){
//     console.log(value)
// }


// var obj={
//     name:"sai",
//     adress:{}
// }