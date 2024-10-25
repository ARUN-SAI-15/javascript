// genraters means genrater function 

//normal function
// function normal(){
// console.log(100)
// }
// normal()

//it is not a predefined name  generater function   it can return multiple values in multiple pages

function *genfun(){{
    console.log(100)}
 

    yield 'sai'    // pause
    console.log(200)
    yield 29
 }
 genfun()

//  console.log(genfun())

 var genobj=genfun()
//  console.log(genobj)
 console.log(genobj.next()) //next method will start the excution and then movie  to the next method and pause at the yield
console.log(genobj.return())
 console.log(genobj.next())
 console.log(genobj.next())



// for(value of genobj){
//     console.log(value)
// }


//genrater function is used in video  streaming applications 