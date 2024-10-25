//object literal
// var person1={
//     name:"arun",
//     age:40,
//     play:function(){
//         console.log(play)
//     }
// }
// console.log(person1)
// console.log(typeof person1)

         //factory function

// function factory(name,age){
//    return {
//         name:name,
//         age:age,
//         play:function(){
//             console.log(play)
//         }
//     }
//     }
// var person1=factory("sachin",40)

// console.log(person1)

// var person2=factory("kohli",30)
// console.log(person2)

    

        //constructer

  // function Test(name,age){
  //      this.name=name;
  //        this.age=age;
  //        this.play=function(){
  //           console.log(play)
  //        }
         
  // }      
  // var person1= new Test("sachin",40)
  // console.log(person1)



  /////classic way



    //  class Way{
    //     constructor(name,age)
    //     {
    //       this.name=name;
    //       this.age=age;
    //       this.play=function(){
    //         console.log(play)
    //       }
    //     }
    
      
    //  }
    //  var person1=new Way("arun",21)




          //    var person={
          //     name:"arun",
          //     age:21,
          //     play:function(){
          //       console.log(play)
          //     }
          //    }
          //    console.log(person.name)
  
          //    //how to add new properties
          //    person.city="ongole"  

            
          //    console.log(typeof person.city)
          //    person.go=function(){
          //     console.log(go)
          //    }
          //    console.log(person)
          //    //how to delete existinfg properties from object
          //    delete person.age
          //    delete person.go  

          //   console.log(person)
          //  // how to update
          //  person.name="kohli"
          //  console.log(person)
 //how to loop object
 
 //for in loop

 var person={
  name:"sachin",
  age:40,
  city:"mumbai",
  play:function(){
    console.log(play)
  }
 }
//  console.log(person.name)
//  console.log(person.age)
//  console.log(person.city)
//  console.log(person.play)



var keys = Object.keys(person)
console.log(keys)

var values= Object.values(person)
console.log(values)

var entries=Object.entries(person)
console.log(entries)

   //premitives perform only deep copy

     var x=10

     var y=x


     console.log(x)
     console.log(y)

     y=30
     console.log(y)

     // reference

     var originalobj={
      name:'arun',
      adress:{road:201},
      play:function(){
        console.log(play)
      }
     }
// console.log(originalobj)



// var copiedobj=originalobj //normal copy

// console.log(copiedobj)

// copiedobj.name="kohli"
// console.log(copiedobj)
// console.log(originalobj)
// var copiedobj=JSON.parse(JSON.stringify(originalobj))
// var lodash=required("lodash")
// var copiedobj=lodash.clonedeep(originalobj)
// var copiedobj= Object.assign({},originalobj)
// var copiedobj={... originalobj}


console.log("originalobj",originalobj)



var copiedobj=Object.assign({},originalobj)

console.log(copiedobj)
copiedobj.name="kohli"
copiedobj.adress.road=301