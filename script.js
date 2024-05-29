//practice question no 1
let head=document.querySelector("h2")
console.dir(head.innerText)
head.innerText=head.innerText+ " from apna college"
//practice question no 2
let boxs=document.querySelectorAll(".box")
let idx=1
for(divs of boxs){
    divs.innerText=`new valuse of box no ${idx}`
    idx++
}
