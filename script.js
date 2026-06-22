//to store the two numbers from the input
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

//create buttons for calulation
let addBtn = document.getElementById("add");
let subBtn = document.getElementById("substract");
let mulBtn = document.getElementById("multiply");
let divBtn = document.getElementById("divide");

//to store the results
let result = document.getElementById("result");

//to add the numbers when add button is clicked
addBtn.addEventListener("click",function() { //to run the function when the button is clicked
    let a = Number(num1.value);//to convert the entered value in string to integer
    let b = Number(num2.value);
    result.innerText = a+b;
});

//to substract the numbers when sub button is clicked
subBtn.addEventListener("click",function(){
    let a = Number(num1.value);
    let b = Number(num2.value);
    result.innerText = a-b;

});

//to multiply the numbers when mul button is clicked
mulBtn.addEventListener("click",function(){
    let a = Number(num1.value);
    let b = Number(num2.value);
    result.innerText = a*b;

});

//to divide the numbers when div button is clicked
divBtn.addEventListener("click",function(){
    let a = Number(num1.value);
    let b = Number(num2.value);
    result.innerText = a/b;

});