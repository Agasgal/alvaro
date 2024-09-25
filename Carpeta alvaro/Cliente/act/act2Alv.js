// Modifica el programa anterior: si los números no son un número o son menores o iguales a
//ceros, que los vuelva a pedir.
"use strict"
{
    let a = parseInt(prompt("Give a number",0));
    let b = parseInt(prompt("Give a number",0));
    function function1(a,b){
        if (isNaN(a,b) || a<=0 || b<=0) {
            alert("Give a number higher than 0");
            let a = parseInt(prompt("Give a number",0));
            let b = parseInt(prompt("Give a number",0));
            return function1(a,b);
        }
        else if(a<b){
             return console.log(b + " is higher than " + a);
        } else if (a>b) {
            return console.log(a + " is higher than " + b);
        } else {
            return console.log(b + " are equals " + a);
        }
    }
    console.log(function1(a,b));
}