var getbtn=document.getElementById('1')

function getfun(){

    fetch('https://jsonplaceholder.typicode.com/posts')//fetch data function
    .then((res)=>res.json())  // converting json to js
    .then((data)=>{
        console.log(data)
    })          // display the data 


    .catch((err)=>{
 console.group(err)
    })    //failure case
}

// to call api we have to method one is fetch and another is axis it is a library 


getbtn.addEventListener('click',getfun)


//postman to check the api it is a software


//get single data 


var getsibtn=document.getElementById('2')

function getsinglefun(){
    
    fetch('https://jsonplaceholder.typicode.com/posts/100')//fetch data function
    .then((res)=>res.json())  // converting json to js
    .then((data)=>{
        console.log(data)
    })          // display the data 


    .catch((err)=>{
 console.group(err)
    }) 
}
getsibtn.addEventListener('click',getsinglefun)



var postsbtn=document.getElementById('3')

var data={
    userId:111,

    title: "this is our post send",
    body: 'my body'
} 

function postsfun(){

    fetch('https://jsonplaceholder.typicode.com/posts',
    {
    method:"post",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(data) 
  })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
 }



postsbtn.addEventListener('click',postsfun)


//update api   id based update  status 200 means updated

var updatebtn=document.getElementById('4')


var data={
    userId:113,

    title: "this is our post update",
    body: 'my body'
} 


function updatefun(){
fetch('https://jsonplaceholder.typicode.com/posts/1',
{
method:"put",
headers:{'content-type':'application/json'},
body:JSON.stringify(data) 
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
}



updatebtn.addEventListener('click',updatefun)


//deleta data

var deletebtn=document.getElementById('5')



function deletefun(){

    fetch('https://jsonplaceholder.typicode.com/posts/4',
    {
    method:"delete"
  })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
 }



deletebtn.addEventListener('click',deletefun)
