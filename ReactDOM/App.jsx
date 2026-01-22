// console.log("hello")
const parent=document.getElementById('container');
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'red'}},"Welcome to React dev");
// const li1=React.createElement("li",{},"Java Programming");
// const li2=React.createElement("li",{},"React");
// const li3=React.createElement("li",{},"HTML")
// const li4=React.createElement("li",{},"CSS");
// const ul=React.createElement("ul",{style:{textAlign:'center'}},li1,li2,li3,li4);
// const img=React.createElement("img",{src:"./pic.png",style:{height:100,width:"100",borderRadius:'50px'}},);
// const div=React.createElement('div',{style:{border:'5px solid black', height:'400px',width:'300px',textAlign:'center'}},h2,img,ul);

const h2=<h2>Hello World</h2>;
root.render(h2);