   // af\  



   var s=window.setTimeout(()=>{
    console.log('timeout')  //the   set timeout will not excuteee the function wil be excuted after four sec
   },4000)
   console.log(window)
  
  
  var interval= window.setInterval(() => {
    
    console.log('interval')  //the   set timeout will not excuteee the function wil be excuted after four sec
   },4000)


   window.clearTimeout(s) //   to clear we need to store the set time ot/interval in a variable

// window.clearInterval(interval)

 