var table=document.getElementById('table')
console.log(table)


function tableclick(x){
    console.log('click')
    console.log(x.target)
}

table.addEventListener('click',tableclick)