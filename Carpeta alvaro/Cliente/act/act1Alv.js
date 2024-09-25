//. Dados dos números indicar cuál es mayor, menor o si son iguales.
"use strict"
{
    let a = parseInt(prompt("Give a number",0));
    let b = parseInt(prompt("Give a number",0));
    function function1(a,b){
        if(a<b){
            
            return console.log(b + " is higher than " + a);
        } else if (a>b) {
            return console.log(a + " is higher than " + b);
        } else {
            return console.log(b + " are equals " + a);
        }
    }
    console.log(function1(a,b));
}