// const name = function (name){
//    console.log(name);
// }
//object - map di
const { compare } = require("bcrypt");

// const  mapValue= new Map();
// mapValue.set("a",name)
// mapValue.set({a:1}, "dfasfa")
// const data=mapValue.get("a")


// data("dileep");

// console.log(mapValue);


// function addSum(arr){
//     return arr.reduce((a,b)=> {
//         console.log(a,b);
//         return a+b
//     },0);
// }

// const sumValue =addSum(arr)
// console.log(sumValue);

const arr=[1,2,3,4,5,6]

function  setTiming(value){
    setTimeout(() => {
        console.log("hello world!!!" + value)
        
    }, value*1000);
}

// arr.forEach(element => {
//   setTiming(element)   
// });
Promise.all([data(),data2(),data3()])

function data(){
    setTimeout(() => {
        console.log("2 senconds");
    }, 2000);
}
function data2(){
    setTimeout(() => {
        console.log("3 senconds");
    }, 3000);
}
function data3(){
    setTimeout(() => {
        console.log("4  senconds");
    }, 4000);
}


// 1 2 3 4 5 6 7 8
const arr1=[1,2,8 ];

arr.reduce(function(fst,secnd){
   do {
    console.log(++fst);
   } while (fst < secnd && secnd == fst + 1);
})

var length = arr.length;
var last_elem = arr[length -1];
for(var i= length -1 ; i > 0; --i ){
    do {
        console.log(arr[i-1]);  
    } while (!(arr[i-1] == --arr[i]) );
    if(!(arr[i-1] == --arr[i]) ){   7 == -8
        console.log()
    }
}
