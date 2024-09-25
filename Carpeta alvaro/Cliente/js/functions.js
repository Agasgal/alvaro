"use strict"
{
    function function1(param1, param2, param3) {
    console.log("funtion1");
    console.log(param1);
    console.log(param2);
    console.log(param3);

}

function1(10, 20, 30);
function1(10, 20);

function function2(param1, param2, param3) {
    console.log("function2");
    console.log(param1);
    console.log(param2);
    console.log(param3);

}

function2(10, 20, 30);
function2(10, 20);
function2(10, 20, 30, 40, 50);

const function3 = function(param1,param2,param3){
    return param1+param2+param3;
}
console.log(function3(10,20,30));

(function (a1,a2,...a3){
    console.log("hola")
    console.log(a1);
    console.log(a2);
    console.log(a3)
}) (10,20,30,40,50,60);

let v = (function (a,b){
    return a+b;
}) (parseInt(prompt("type a: ", 0)), 
parseInt(prompt("type b: ", 0)));

console.log(v);
}
