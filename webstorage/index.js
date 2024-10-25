


var lstorebtn=document.getElementById('lstore')
function lstorefun(){
   localStorage.setItem('name','sai')          
   localStorage.setItem('age',40)          

}

lstorebtn.addEventListener('click',lstorefun)


//get
var lgetbtn=document.getElementById('lget')
function lgetfun(){
   console.log(localStorage.getItem('name'))     
   console.log(localStorage.getItem('age'))          

   var h=document.createElement('h4')
 
var name=localStorage.getItem('name')
  h.innerText=name
  console.log(h)
    var parent=document.getElementById('lparent')
    parent.appendChild(h)
    }

 lgetbtn.addEventListener("click",lgetfun)   


//  //remove

//  var lremovebtn=document.getElementById('lremove')

// function lremovefun(){
// console.log('remove')
// }

// lremovebtn.addEventListener('click',lremovefun)

// //clear

// var lclearbtn=document.getElementById('lclear')

// function lclearfun(){
// console.log('clear')
// }

// lclearbtn.addEventListener('click',lclearfun)

//sstore

var sstorebtn=document.getElementById('sstore')
function sstorefun(){
  sessionStorage.setItem('name','sai')    
 sessionStorage.setItem('age',30)          

}
  sstorebtn.addEventListener('click',sstorefun)


//sget
var sgetbtn=document.getElementById('sget')
function sgetfun(){
   console.log(sessionStorage.getItem('name'))     
   console.log(sessionStorage.getItem('age'))          

   var h=document.createElement('h2')
   var s=document.createElement('h2')

 
var name=sessionStorage.getItem('name')
var age=sessionStorage.getItem('age')

  h.innerText=name
  s.innerText=age
  console.log(h)
  console.log(s)
    var parent=document.getElementById('sparent')
    parent.appendChild(h)
    parent.appendChild(s)
    }

 sgetbtn.addEventListener("click",sgetfun)   

 //sremove

 var sremovebtn=document.getElementById('sremove')
 function sremovefun(){
    sessionStorage.removeItem('name');
 }
 sremovebtn.addEventListener('click',sremovefun)


 //sclearn
 var sclearbtn=document.getElementById('sclear')

 function sclearfun(){
   sessionStorage.clear()
 }
 sclearbtn.addEventListener('click',sclearfun)