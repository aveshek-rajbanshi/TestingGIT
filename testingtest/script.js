let botton1 = document.getElementById('box1');
let botton2 = document.getElementById('box2');
let botton3 = document.getElementById('box3');
let botton4 = document.getElementById('box4');

let body = document.getElementById('contain');
botton1.addEventListener('click',()=>{
    body.style.backgroundColor = "blue";
});

botton2.addEventListener ('dblclick',()=>{
    body.style.backgroundColor = 'red';
});

botton3.addEventListener ('mouseenter',()=>{
    body.style.backgroundColor = 'pink';
});

botton3.addEventListener ('mouseleave',()=>{
    body.style.backgroundColor = 'yellow';
});

botton4.addEventListener ('mouseenter',()=>{
    body.style.backgroundColor = 'green'
});