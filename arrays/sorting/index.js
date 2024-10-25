// // sorting premitives single values 


// var arr=[1,5,3,5,7,1]
// console.log(arr)
   
// var as=arr.sort() //for double value 

//     console.log(as)


//     var desc=arr.reverse()
// console.log(desc)

// // sorting primitives in double vaues 
// var as=[1,23,45,82983443,78,42,222]

// console.log(as)
// var obj=as.sort((a,b)=>{
//     return a-b // ascending order compare with ascii vallues
// })

// console.log(obj)
// var oj=as.sort((a,b)=>{
//     return b-a// ascending order compare with ascii vallues
// })
// console.log(oj)

// foor double value we will take comparision 

// var names=['sahcchin','jrntr','arun','sai','king']
// console.log(names)
// var asc=names.sort()
// console.log(asc)

// var des=names.reverse()
// console.log(des)

// reference data type sorting 
// var arr=[{course:'java'},{course:'python'},{course:'css'},{course:'react'}]


// var asc= arr.sort((a,b)=>{
//   if ( a.course>b.course){
//     return 1}
//     if(a.course<b.course){
//         return -1}
// })

// console.log(asc)


// var arr=[1,6,2,4,8]


var arr=['sahchin','jrntr','arun','sai','king']
console.log(arr)

for(var i=0;i<=arr.length;i++){
// console.log('i:',i)
{
    for (var j=i+1;j<=arr.length;j++)
    {
    // console.log('j:',j)

    if (arr[i]<arr[j]){
        var temp=arr[i]
      arr[i]=arr[j]
       arr[j]=temp
    }
}
}
}

console.log(arr)