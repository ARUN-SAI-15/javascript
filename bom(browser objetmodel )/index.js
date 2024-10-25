// console.log(document);

// console.log(window)

// console.log(window.alert)

// console.log(window.prompt)

// console.log(window.sessionStorage)

// console.log(window.localStorage)

// console.log(window.setInterval)

// console.log(window.setTimeout)

// console.log(window.clearInterval)

// console.log(window.clearTimeout)

// console.log(window.screen.height)

// console.log(window.screen.width)

// console.log(window.innerHeight)

// console.log(window.innerWidth)


// console.log(window.alert("i love you"))

// console.log(window.prompt())


// var age=window.prompt()

// if(age>=18){
//     console.log('you are having 18')
// }
// else{
//     console.log('not eligible for vote')
// }


// var value=window.confirm()

// if(value==true){
//     console.log('podham')
// }
// else{
//     console.log('vadhu ra')
// }

// console.log(window.document)

// var openbtn=document.getElementById('open')

// function openfun(){
//   var win=window.open('','','width=600 height=59')

// }

// openbtn.addEventListener('click',openfun)



// var closebtn=document.getElementById('close')

// function closefun(){

//     win.close()

// }

// closebtn.addEventListener('click',closefun)

// var movebtn=document.getElementById('move')


// navigator


// console.log(navigator)
// console.log(navigator.appName)
// console.log(navigator.appVersion)
// console.log(navigator.platform)
// console.log(navigator.language)
// console.log(navigator.onLine)


//screen object

// console.log(window.screen)
// console.log(window.screen.width)
// console.log(window.screen.height)
// console.log(window.screen.availHeight)
// console.log(window.screen.availWidth)

// //location obj


// console.log(window.location)
// console.log(window.location.href)
// console.log(window.location.host) //5500 is aport name
// console.log(window.location.hostname) //server name

// console.log(window.location.pathname)
// console.log(window.location.port)
// console.log(window.location.protocol)

// console.log(window.location.assign)


// loadbtn=document.getElementById('load')

// function loadfun(){
// window.location.assign('https://www.youtube.com/')
// }

// loadbtn.addEventListener('click',loadfun)



//window history


console.log(window.history)

var forwardbtn=document.getElementById('forward')

function forwardfun(){
    window.history.forward('https://www.youtube.com/')
}



forwardbtn.addEventListener('click',forwardfun)