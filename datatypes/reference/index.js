//data sturucture 
//object
// why does the age is undefined 
var person = {
   name: 'sachin',
   age: 40,
   play: function () {
   
   }
 }
 console.log( person,typeof person
 )
console.log(person.name,typeof person)
console.log(person.age,typeof age)

//array
//why does it showing object 
var color=['rrr','bahubhalli' ,35,45]
console.log(color,typeof color,color.length)
console.log(Array.isArray(color))
console.log(color[2],typeof color[2])


//function

var x = 10

function test() {
  var x = 100
}
test()
console.log(typeof test)