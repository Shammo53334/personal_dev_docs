// var a = document.querySelector("h1")
// document ba html er bhitor kono query select korlam
// a.innerHTML="h1 element is changed"
// a.style.color="yellow"
// a.style.backgroundColor="black"
// a.addEventListener("click",function(){
//    a.innerHTML="hi ami Shammo"
//    a.style.color="pink"
//    a.style.backgroundColor="black"
// })

var bulb =document.querySelector("#bulb")
var btn=document.querySelector("button")
var flag = 0

btn.addEventListener("click",function(){
    if(flag==0){
    bulb.style.backgroundColor="yellow"
     btn.innerHTML="off"
    console.log("clicked")
    //for testing
    flag=1
    // for toggling
    }
    else{
        bulb.style.backgroundColor="transparent"
        btn.innerHTML="on"
    console.log("again clicked")
    //for testing
    flag=0
    
    }
})


// multiple  elements at a time
// var h =document.querySelectorAll("h1")

// h.forEach(function(e){
//     console.log(e)
//     //jehetu nodelist array er moto tai for each diye e pass kore element gula ke access kora jay
// })

var h = document.querySelector("h1")

h.innerHTML="<h6>bye</h6>"
// h.textContent="<h1>bye</h1>"
h.style.color="black"