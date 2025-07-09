// console.log("hello world");
// var a=200;
// console.log(a);
// function abc(){
//     console.log("hello world");
// }
// var b= 3000;
// console.log(b);
// // setTimeout(()=>{
// //     console.log("i am set time out");
// // },2000);
// console.log("end of program");
// //var a= 0239
// console.log("hello");
// var a=300;
// console.log(a);
// // console.log(xyz);
// xyz();
// var xyz=()=>{
//     console.log("hello xyz function");
// }
// console.log("end");
// function calculate(param1){
//     console.log("calculate the BL");
//     param1();
// }
// var sumofTwo= ()=>{
//     console.log("SUM of TWO Working ");
// }
// calculate(sumofTwo);
// function calculate(logicFunction,a,b){
//     return logicFunction(a,b);
// }

// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// console.log(calculate(add,3,5));
// console.log(calculate(sub,8,5));
// function printStudentDetails(){
     
// }
// setTimeout(()=>{
//     console.log("hello settimeout")
// },2000)
// //debouncing:- if we want real time suggestions in search bar  we use settime out 
// setInterval(()=>{
//     console.log("hello setInterval")
// },2000)

// console.log("I DECIDED TO GO TO THE RESTAURANT");
// function walkIn(cb){
//     console.log("WALKING INSIDE THE RESTAURANT");
//     setTimeout(cb,3000)
// }
// function checkMenu(cb){
//     console.log("CHECKING THE MENU");
//     setTimeout(cb,2000)
// }
// function orderLunch(cb){
//     console.log("Giving the order");
//     setTimeout(cb,5000)
// }
// function havingLunch(cb){
//     console.log("I AM HAVING MY LUNCH");
//     setTimeout(cb,6000)
// }
// function walkOut(cb){
//     console.log("WALKING OUT OF  THE RESTAURANT");
//      setTimeout(cb,6000)
// }
// walkIn(() => {
//     checkMenu(() => {
//         orderLunch(() => {
//             havingLunch(() => {
//                 walkOut(() => {
//                     console.log("DONE WITH LUNCH PROCESS ✅");
//                 });
//             });
//         });
//     });
// });//this situation is called pyramid doom/inversion of control/callback hell
// // to overcome this we have promise
// var cart=["shoes","watches","bags","jeans","rings"]
// function createOrder(cart){
//     // takeprice and total no of order
    
// }
// function placeOrder(Price,noOfItems){
//     // generate orderid and go to payment gateway 
// }
// function orderPayment(order ,Price,noOfItems){
// // place order
// }
//  function orderStatus(){
// // all details 

// }
// let arr= [2,4,5,6,7,8]
// // const newArr = arr.map((x)=>x*2)
// // console.log(newArr)

// // to make replica of map we have to use PROTOTYPEES
// function doubleData(x){
//     return x*x;

// }
// // this keyword is not used with arrow function
// Array.prototype.mapReplica=function(logic){
//     let outputArray=[];
//     for(let i=0;i<this.length;i++){
//         outputArray.push(logic(this[i]));
//     }
//     return outputArray;
// }
// const myProtoData = arr.mapReplica(doubleData);
// console.log(myProtoData)
// filter 
//  const words=["spray","elite","exuberant","destruction","present"];
// // const result= words.filter((word)=>word.length>6)
// // console.log(result)
// Array.prototype.filterReplica=function(logic){
//         let outputArray=[];
//         for(let i=0;i<this.length;i++){
//             if(logic(this[i])){
//             outputArray.push(this[i]);
//             }
//         }
//         return outputArray;
//     }
//     const myProtoData = words.filterReplica((word)=>word.length>6);
//     console.log(myProtoData)

// reduce
// const arr=[1,2,3,4]
// const initialValue=0
// // const switchInitial= arr.reduce(
// //     (accumulator,currentValue)=>accumulator+currentValue,
// //     initialValue,
// // );
// function myLogic(acc,curr){
//     return acc+curr
// }
// // console.log(switchInitial);
// Array.prototype.reduceReplica=function(logic,initialValue){
//     let result= initialValue;
//     for(let i=0;i<this.length;i++){
//         result= logic(result,this[i])
//     }
//     return result

// }
// const finalAnswer= arr.reduceReplica((acc,curr)=>acc+curr,0)
// console.log(finalAnswer)
//   const myPromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("i will get the placement");
//     },3000);
//   });
//   myPromise
//   .then((res)=>console.log(res))
//   .then(()=>setTimeout(()=>{
//         console.log("bonooooo bonoooooooo yeahhhhhhhhhhhhhhhhhh!!!!!!!!!!")
//    },2000))
//     .then(()=>setTimeout(()=>{
//         console.log("kaam krna pdegaaaaaaaa")
//    },4000))
//     .then(()=>setTimeout(()=>{
//         console.log("nikal diyaaaaaaaaa😥😥😥")
//    },1000))
//   .catch((err)=>console.log(err));
//   console.log(myPromise);
// function placement(placementStep,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("hai bhagwan naukri lg jayeeeee!!!!!!!!!!!!"+placementStep);
//             console.log(placementStep);
//         },delay);
//     });
// }
// placement("Naukriiii lgg gi oyeee!!!!!!",5000)
// .then(()=>placement("partyyyyyyyyy!!!✌️✌️✌️✌️",3000))
// .then(()=>placement("abh to kaam krna pdegaaaaaaaa",3000))
// .then(()=>placement("nikal diyaaaaa😥😥😥",1000))
// .catch((err)=>console.log(err));

// async and await :- to make any fucntion asynchronous 2:- function is always synchronous
// fetch is a type of promise and its datatype is object 
// async function fetchData(){
//   const data=await fetch('https://dummyjson.com/products');
//   const finalData= await data.json();
//   console.log(finalData);
// }
// fetchData();
// event capturing:- goes from top to bottom eg add event listener 
// event bubbling:- goes from bottom to top
const grandparent= document.getElementById('grandparent');
const parent= document.getElementById('parent');
const child= document.getElementById('child');
grandparent.addEventListener('click',()=>{
    console.log("this is grandparent div")
},true);
parent.addEventListener('click',()=>{
    console.log("this is parent div")
},true);
child.addEventListener('click',()=>{
    console.log("this is child  div")
},true);

