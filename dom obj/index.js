 



 //how to examine dom 

//  console.dir(document)

//how to read dom properties


// console.dir(document.title)
// console.dir(document.all)
// console.dir(document.links)
// console.dir(document.forms)
// console.dir(document.doctype)
// console.dir(document.domain)


// how to select dom elements 

// var paraone=document.getElementById('para1')
// console.log(paraone)

// para1.style.color='red'

//selecter by class
// var s=document.getElementsByClassName('myclass')

// console.log(s)

// by tag name 
// var par=document.getElementsByTagName('p')
// console.log(par)


//query selecter

// var query=document.querySelector('p')
// console.log(query)

// var query=document.querySelector('.myclass')
// console.log(query)

// var query=document.querySelector('#para1')
// console.log(query)


//queryselecterall

// var queryall=document.querySelectorAll('#para1')
// console.log(queryall)


// var queryall=document.querySelectorAll('.myclass')

// console.log(queryall)


// var queryall=document.querySelectorAll('p')


// console.log(queryall)

//traversing of dom 

var obj=document.getElementById('child')

console.log(obj)

//parent

// var parent = domElement.parentElement
// console.log(parent)

var preSibling = domElement.previousElementSibling

console.log(preSibling)
//how to manupulate dom 

//add


// var para=document.createElement('p')

// console.log(para)

// para.innerText='this is para'

// para.id='myid'
// para.className='myclass'

// var body=document.getElementById('body')
// body.appendChild(para)






// var oj=document.createElement('h1')

// console.log(oj)

// oj.innerText='this is heading1'
// oj.id='id'
// oj.className='class'

// body.appendChild(oj)
//how to attach event to dom element 


//update



// var odj=document.createElement('h6')
// console.log(odj)

// odj.innerText='this is heading6'
// odj.id='id'
// odj.className='class'

// body.replacechild(h6,h1)


// div.remove()

//parent.removechild()




// var button=document.getElementById('but')
// console.log(button)

// function test(){
//     console.log('button clicked')
// }

// document.addEventListener('click',test,true,false)


//manupulate

