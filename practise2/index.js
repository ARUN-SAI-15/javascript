


var local=document.getElementById('locals')
// console.log(locals)

 function localss(){
    localStorage.setItem('name','sai')
    localStorage.setItem('age','40')

 }

local.addEventListener('click',localss)


//get

var localgg=document.getElementById('localg')

function localgl(){
   console.log(localStorage.getItem('name'))

   var x= localStorage.getItem('name')
   var y= localStorage.getItem('age')

    var nameh4=document.createElement('h4')

    var ageh4=document.createElement('h4')
    

    var name=x
    var age=y
console.log(name)
    nameh4.innerText=name
    ageh4.innerText=age

   var z= document.getElementById('parent')

     z.appendChild(nameh4)

}
localgg.addEventListener('click',localgl)
