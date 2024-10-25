
//es-6 destructing  it is a reference data .the removing of  array or object structure intoo an individual item


// var details={
//     name:'arun',
//     age:21,
   
//     adress:{ city:"ongole",road:301},
//        play:function test()
//        {
//         console.log(test)
//        },
//        arr:[1,2,3,5]}

//     console.log(details)
//     console.log(details.name)
//     console.log(details.age)

//     console.log(details.adress)

//     console.log(details.adress.road)


//     console.log(details.adress.city)


//     console.log(details.play)
//     console.log(details.arr)



//     //with destructing

//     var{name,age,adress:{city,road},play,arr:[x,y,w,e]}=details



//     console.log(name)


//     console.log(age)


//     console.log(road)
//     console.log(city)

//     console.log(play)

//     console.log(x)



    // destructure mean to  use the  items individually if we consider object we have to get the element by using .operater
    //but for destructer we will  bring the individual items to gether and then we call it by name.



var obj={
    adress:{city:'delhi'},
    relatives:['kohli','gill','dhoni'],
    propertirs:{cash:'2cr',car:{
        color:'white',
        price:10000000,
        start:function(){
            console.log('start')
        },
        persons:['arun','sai']
    }}
}


// console.log(obj.adress)
console.log(obj.adress.city)
// console.log(obj.relatives)
console.log(obj.relatives[0])
console.log(obj.relatives[1])
console.log(obj.relatives[2])
// console.log(obj.propertirs)
console.log(obj.propertirs.cash)
// console.log(obj.propertirs.car)
console.log(obj.propertirs.car.color)
console.log(obj.propertirs.car.price)
console.log(obj.propertirs.car.start)
// console.log(obj.propertirs.car.persons)
console.log(obj.propertirs.car.persons[0])
console.log(obj.propertirs.car.persons[1])


//with destruture

var {adress:{city},relatives:[x,y,z], propertirs:{cash,car:{color,price,start,persons:[a,s]}}}=obj





console.log(city)
console.log(x)
console.log(y)
console.log(z)

console.log(cash)
console.log(color)
console.log(price)
console.log(start)
start()
console.log(a)
console.log(s)




var arr=['sachin',{car:'bmw',persons:['arun','sai']}]


console.log(arr[1])
var [x,{car,persons:[z,e]}]=arr

console.log(x)
console.log(z)
console.log(e)





