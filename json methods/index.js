// betwwen servers data  tansefered in json format


var js={
    name:'as',
    age:21,
    city:'ongole'
}

console.log('jsobj:',js)

var jsonobj=JSON.stringify(js)  

console.log("json:" ,jsonobj)

var jsonpar=JSON.parse(jsonobj)

console.log('json parse:',jsonpar)