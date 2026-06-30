let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// };

btn1.addEventListener("click", (e) =>{
    console.log("button1 was clicked-header1");
    console.log(e);
    console.log(e.type);

});


btn1.addEventListener("click", () =>{
    console.log("button1 was clicked-headler2");
});

const handler3 = () => {
    console.log("button1 was clicked-headler3");
};

btn1.addEventListener("click", headler3);

btn1.addEventListener("click", () =>{
    console.log("button1 was clicked-headler4");
});


btn1.addEventListener("click", headler3);
//  let div = document.querySelector("div");

/*console.log("btn1 was clicked");
let a = 25;
a++;
console.log(a);//26
};*/

// let div = document.querySelector("div");
// div.onmouseover = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// };
