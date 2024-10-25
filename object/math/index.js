//  var x=22
//  var y= 33

//  var z=22.5

//  console.log(Math)

//  console.log(Math.floor(z))
//  console.log(Math.ceil(z))
//  console.log(Math.round(z))
//  console.log(Math.random()*5)
 console.log(Math.pow(3,3))
 console.log(Math.sqrt(225))



//  // date obj
// var now =new Date()
//  console.log(now)
//  console.log(now.getDate())
//  console.log(now.getMonth())
//  console.log(now.getFullYear())
 
//  console.log(now.getDay())



// //set methods



// var date2= new Date(2002,11,15,11,11,11)
// console.log(date2)


// //template string
// //without template string
// var name="arun"


// var age=21

// console.log("hi i am  " + name +" my age is "+age)


// console.log(`hi this is ${name} my age ${age}`)


// //  string object

var msg='hi iam arun'

console.log(msg)
console.log(typeof msg)
// how to find string lenghth ? it is used for the validations 
console.log(msg.length)//the empty space wil also be taken in length 
// how to remove white space?



console.log(msg.length)

console.log(msg.trimStart().length)
console.log(msg.trimEnd().length)
console.log(msg.trim().length)



//how to copy or extract a path of string?

//slice()

var sun='hi this is sunny'

console.log(sun.slice(0))
console.log(sun.slice(2,sun.length))
console.log(sun.slice(3,sun.length))
console.log(sun.slice(2,6))//end index is exclusive 

console.log(sun.slice(0,-2))



//sub string

var string='hi i am arun arun'

console.log(string)
console.log(string.substring(2,6))//negative values doesnot presnt in sub string


//substr

var str=string

console.log(str)

console.log(str.substr(1,8))


//charat

console.log(str.charAt(3))

//charcodeat it is used to know for the ascii values 

var code=msg.charCodeAt(3)
console.log(code)

// how to convert the string case

console.log(str)
var upper=str.toUpperCase()//same for lower case
console.log(upper)


//concate

var cate=msg.concat('i love you') // it only add at the end of the string

console.log(msg)
console.log(cate)


//how to pad at the start and the end 

var pad=msg.padStart(28,"arun")//padstart(targetlength,whta you  want to add)
console.log(pad)
console.log(msg)

var as="uas"
console.log(as.padEnd(7,'king'))


// how to replace existing string 

console.log(msg)
var replace=msg.replace("hi","i love you")

console.log(replace)
// replace is a case sensitive 


//how to convert string in to an array  by using split method we can convert string to array


// var arr=msg.split()
// var arr=msg.split("")
var arr=msg.split(" ")


console.log(arr)
console.log(msg)



// how too find string ?


console.log(str)


var find=str.indexOf("arun")
var findse=str.lastIndexOf("arun")
console.log(find)// -1 return means the string doesnot present in the memory ,the first occurence will return first
console.log(findse)

//include

var inc=str.includes("hi")
console.log(inc)//case senstive

//starts with
var start=str.startsWith(as)
console.log(start)

//ends with
var end=str.endsWith("arun")
console.log(end)



