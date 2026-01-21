// console.log("Hello World");

// console.log("first");
// setTimeout(  ()=>{console.log("second")},2000);
// console.log("third");

// const mypromise=new Promise((resolve,reject)=>{
// let age=10;
// if(age>18)

//     resolve("Eligible to vote");
// else{
//      throw new Error("Error");
//     reject("Not elgible for voting");
   
// }

// });
// // console.log(mypromise);
// mypromise.then((msg)=>{console.log(msg)}).catch(e=>console.log(e)).finally(()=>{
//     console.log("Hii.... Resources closed automatically")
// })

// async function handlePromise(){
//     try{
//     const result=await mypromise;
        

//     }
//     catch((e)=>{
//         console.log(e);
//     });
// finally{

// }

// }

// const response=fetch("https://fakestoreapi.com/products");
// response.then(res=>{
//     console.log(res);
//     res.json().then((jsonData)=>console.log(jsonData)).catch(e=>{
//         console.log(e)
//     })
// })
const container=document.getElementById("container");
const button=document.getElementById('btn');
const loader=document.getElementById('loader');
console.log(button);
console.log(container);
let html="";
async function getData(){
    try{
        alert("Hiiii");
        loader.innerHTML=`<h2>Data is loading</h2>`
const response=await fetch("https://fakestoreapi.com/products");
// console.log(response);
const jsonres=await response.json();

jsonres.map((ele)=>{
    html+=`<div><h2>${ele.id}</h2> <h2>${ele.title}</h2></div>`
})
// console.log(jsonres);
container.innerHTML=html;
}

    catch(e){
        console.log(e);

    }
finally{
    loader.innerHTML("");
}

// getData();
}
button.addEventListener('click',()=>getData());
