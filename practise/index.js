// var obj={
//     name:"arun",
//     adress:{road:201},
//     play:function(){console.log(play)}
// }

// console.log(obj)

// function factory(name,age){
//   return{  name:name,
//         age:age,
//     adress:{road:201},
//     play:function(){console.log(play)}}
// }

// var person1=factory("arun",21)

// var person2=factory("sai",22)



// console.log(person1)
// console.log(person2)


// function Test(name,age){
// console.log(this)
//     this.name=name;
//     this.age=age;
//      this.play=function(){console.log(this)}
//      this.play()
// }


// var person1=new Test("sachin",40)
// var person2=new Test("kohli",30)

// console.log(person1)

// console.log(person2)



//    class test{
//       constructor(names,age)
     

//       {
//         console.log(this)
//       }
      
//    }

// var person1=new test("sachin",40)
                                    

// var originalobj={
//     name:"sai",
//     adress:{road:201},
//     play:function(){console.log(play)}


// }




// // var copiedobj=JSON.parse(JSON.stringify(originalobj))

// copiedobj={...originalobj}
// copiedobj.name='arun'
// copiedobj.adress.road=58549


// console.log(originalobj)



//  var person={
//     name:'arun',
//     secondName:"sai",
//     get function(){
//         return`${this.name} ${this.secondName}`
    
//     }
//  }
//  console.log(person.function)


// var n=document.createElement('h1')

// // console.log(n)

// n.innerText='this heading1'

// var body=document.getElementById('body')

// // console.log(body)

// body.appendChild(n)

// var p=document.createElement('p')

// p.innerText='this para'

// body.appendChild(p)


// var m=document.createElement('div')

// m.innerText='this division'

// body.appendChild(m)



// var z=document.createElement('h6')  

// z.innerText='thi is heading6'
// z.id='myid'
// z.class='myclass'

// body.insertBefore(z,n)

// // console.log(body.innerText)

// // console.log(body.innerHTML)


// var w=document.createElement('h2')


// w.innerText='this is heading2'


// body.replaceChild(w,z)

// // w.remove()

// body.removeChild(w)



    var oj=document.getElementById('body')

    function test(x){
        console.log(x)
        console.log(x.target)
        console.log(oj)
    }
    oj.addEventListener('click',test,true)