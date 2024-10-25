

// var button=document.getElementById('but')
// console.log(button)

// function test(){
//     console.log('button clicked')
// }

// document.addEventListener('click',test,true,false)

//bubbling && CAPTURING 



var parent=document.getElementById('parent')
var child=document.getElementById('child')
var subchild=document.getElementById('subchild')


function parentFun(e){
    // console.log(e)
    console.log("parent")
}

parent.addEventListener("click",parentFun,false)


function childFun(e){
    console.log("child")
    // console.log(e)

}

child.addEventListener("click",childFun,false)


function subchildFun(e){
    // console.log(e)
    console.log(e.clientx)         //top most view will measure the view port 
     console.log(e.objectx)         //with in the element where are you clicking 
    console.log("subchild")
}

subchild.addEventListener("click",subchildFun,false)