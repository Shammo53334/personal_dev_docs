//cz var is function scoped
// function abcd(){
//     for(let i=1;i<12;i++){
//         console.log(i);
//     }

//     console.log(i);
// }
// abcd();

// var a=12;

// let b=13;

// var a=[1,2,3,4,5];
// var b=[...a];
// // a er shb values spread op dara copy kora jabe
// b.pop();

// var obj ={name:"shammo"};
// var copyobj ={...obj};

// if("shammo"){
//     console.log("hey");
// }
// else{
//     console.log("hello");
// }

// var a =[1,2,23,34,34,4,23,3,4,5];
// a.forEach(function(val){
// console.log(val+2);
// })
//a array k foreach er bhitor anonimoous function diye bhetore val naam e variable diye prottek iteration e prottek value 2 jog kore print korbe

// forin

// var obj ={
//     name:"shammo",
//     age:23,
//     city:"dhaka",

// }

// for(var key in obj){
//     // console.log(key);
//     //  console.log(obj[key]);
//      console.log(key,obj[key]);
//      //obj and key 2 tai print korate
// }

//obj er table header er mtoo data dite forin use kori jekhane for er bhitor var dite hoy jeta in thake object e

// do while

// var a=120;

// do{
//     console.log("hey");
//     a++;
// }
// while (a<15) 

// call back function
// setTimeout(function(){
//     console.log("2 second pore chobe");
// },2000);

//first class function

// function abcd(a){
//     a();
// }
// abcd(function(){console.log("hey");})

// Function abcd er parameter e var a er bhitora run korlam function hishebe karon pore parameter a teh function rakhsi value hishebe

// array is obj in JS
//  var arr =[221,452,3,2344];
//  arr[-1]=23;

//  arr={
//     0:221,
//     1:452,
//     2:3,
//     3:4,
//  }

var a ={
    name:"shammo",
    age:23,
}
delete a.age;
delete a.name;
// age props dlt kore felbe