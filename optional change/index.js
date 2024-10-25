var obj={
    name:'name',
    adress:{road:191}

}

// console.log(obj.adress.road)

//es-5

console.log(obj && obj.adress && obj.adress.road)

// console.log(obj && obj.adress1 && obj.adress1.road)


//es-11

console.log(obj.adress.road)

console.log(obj && obj.adress1 && obj.adress1.road)

console.log(obj.adress1?.road)


