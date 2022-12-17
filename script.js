const num1 = document.querySelector('#number1')
const num2 = document.querySelector('#number2')
const btnadd = document.querySelector('#signadd')
const btnminus = document.querySelector('#signminus')
const btnmultiply = document.querySelector('#signmultiply')
const btndivide = document.querySelector('#signdivide')
var output = document.querySelector('#output')

function add(){
var sol = Number(num1.value)+Number(num2.value)
output.innerText = sol;
}
function minus(){
    var sol = Number(num1.value)-Number(num2.value)
output.innerText = sol;
}
function multiply(){
    var sol = Number(num1.value)*Number(num2.value)
output.innerText = sol;
}
function divide(){
    var sol = Number(num1.value)/Number(num2.value)
output.innerText = sol;
};

btnadd.addEventListener('click',add);
btnminus.addEventListener('click',minus);
btnmultiply.addEventListener('click',multiply);
btndivide.addEventListener('click',divide);


