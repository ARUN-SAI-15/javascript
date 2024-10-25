// // var person={
// //     firstname:'virat',
// //     lastname:'kohli',
// //      fullname (){
// //         return  `${this.firstname} ${this.lastname}`
        
        
// //     }

// // }
  

// // console.log(person)

// // console.log(person.firstname)

// // console.log(person.fullname())                                                             
// // // object without using method by calling  normal we will use get
// // // this key word

// // //this refers an object  window is the topmost object in our local 

// // // console.log(this)  //it will refer the window every object will create a new family 

// // function test(){
// //     console.log(this)
// // }
// // test()

// // function hello(){
// //     console.log(this)
// // }
// // new hello()


// // var person={               // arrow function with this

// //     name:'sai',
// //     age:89,

// //     play:()=>{
// //         console.log(this)
// //     }
 
    
// // }
// // person.play()
// // var person={               // regular function with this

// //     name:'sai',
// //     age:89,

// //     play:function(){
// //         console.log(this)

// //         return function inner(){
// //          console.log(this)
// //         }
// //     }
 
    
// // }
// // person.play()






// // //arrow doesnot consits of this on its own   it will get it by the lexical scope (parent scope)
// // //regular function will have its own this value if it has separate family of it will display the family eithrwise it will show thw window 

// // //if we give the direct memeber then this will act 





// function test(){
//     console.log(this)
// }
// new test()

// var test=()=>{
// console.log(this)}
// test()

// var person={
//     name:'arun',
//     age:22,
//     outer(){
//         console.log(this)

//         var inner=()=>{
//             console.log(this)

//             var hello=()=>{
//                 console.log(this)
//             }
//        hello()
//         }
//       inner() 
//     }

// }
// person.outer()




// function as(){

//  this.name='arun';
//  this.age=40;

// }
// new as()





// //classical way

// class myclass{
//     constructor(){
//         console.log(this)
//      this.name='darani';
//      this.age=23;
//      this.outer=function(){
//         console.log(this)
//         function inner(){
//       console.log(this)
//         }

//      }

//     }
// }

// var family1=new myclass
// console.log(typeof myclass)
// console.log(family1)


//changing of these reference 

// to change it must present of this context .there are two synta es-5 and es-6 
//inn es there are thrreee methods call() method ,bind() method and find() method these methods are predefined 
//in es-6 we will use arrow function 

function test(a,b,c,d,e){
    console.log(this)
    console.log(a,b,c,d,e)}
    var obj={
        name:'sai',
        age:21
    }

test(1,2,3,4,5)
test.call(obj, 1,2,3,4,5)
test.apply(obj,[1,2,3,4,5])
test.bind(obj,1,2,3,4,5)()



// in apply method we cannot pass more than 2 for that reason we should use array 

// in bind method it will not excute by single time we have to call it twice 


var as={
    name:'sai',
    age:21,
    play:function outer(){
        console.log(this)
     var inner=()=>{
        console.log(this)
     }
     inner()
     inner.call(as)
     inner.apply(as)
     inner.bind(as)()
    }
}
as.play()