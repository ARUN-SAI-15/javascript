// // synchronos   if you wait for the code and follow it in step by step 


// console.log('gi')

// console.log('i')


// console.log('bye')

// console.log('arun')


// //aynchronss   if you have to wait try to  just keep it there complete thee remaing code     and 

// console.log('hi')

// setTimeout(()=>{
// console.log('i am arun sai')

// },5000)

// console.log('bye')

// console.log('arun')





// interview code


// console.log('hi') // top most priority

// console.log('hello')

//  setTimeout(()=>{console.log('set timeout')},3000)

//  Promise.resolve().then(()=>console.log('pr-1')).then(()=>console.log('pr-2')) // next pripority is promises 

//  setTimeout(()=>{
//     console.log('time')   // after promisooes  it is the priority
//  },1000)

//  setTimeout(
//     ()=>{
//         console.log('out')
//     }
//  ,0)

//  Promise.resolve().then(()=>console.log('pr-3')).then(()=>console.log('pr-4')) // next pripority is promises 



//  console.log('bye')


 // event loop is aa program 0or mechanism it wiil check the call stack is free  


// var data

//  function fetchdata(displaydata){
//     setTimeout(()=>{
//        data={product:'apple',price:100}
//        displaydata(data)
//     },4000)
//  }
// fetchdata( (data)=>{
//    console.log(data)}
//    )

   // callback drawbacks 


   //call hall back scenerioo

    //due to the code readability misiing
 // synchrons code ni ascrnos ga convert 

 //es-6 promises 

 

// var data
// function fetchData() {
//   var pr = new Promise((res, rej) => {
//     setTimeout(() => {
//       data = { pName: 'apple', pPrice: 100 }
//       res(data);
//     }, 4000)
//   })
//   console.log(pr)
//   return pr
// }

// fetchData().then(
//   function displayData(data) {
//   console.log(data)
// }
// )



// promises with async and await (es-6)

// var data
// function fetchData() {
//   var pr = new Promise((res, rej) => {
//     setTimeout(() => {
//       data = { pName: 'apple', pPrice: 100 }
//       res(data);
//     }, 4000)
//   })
//   console.log(pr)
//   return pr
// }
//  function displayData(data){
//   data=fetchData()
//    console.log(data)
// }
  
//  await will work only on async functionns



var pr1=new Promise((res, rej) => {
  setTimeout(()=>{
 res('pr-1')
  },1000)
})


var pr2=new Promise((res, reject) => {
  setTimeout(()=>{
    res('pr-1')
  },2000)
})


var pr3=new Promise((res, reject) => {
  setTimeout(()=>{
    res('pr-3')
  },3000)
})
Promise.race([pr1,pr2,pr3]).then((res)=>{console.log(res)})