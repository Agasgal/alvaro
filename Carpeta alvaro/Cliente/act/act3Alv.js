// Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo
"use strict"
{
    let a = parseInt(prompt("Give the hour",0));
    let b = parseInt(prompt("Give the minutes",0));
    let c = parseInt(prompt("Give the seconds",0));
    function function1(a,b,c){
        let c = c+1;
        if(c==60){
            let c=0;
            let b=b+1;
            return function1(a,b,c);
        } else if(b==60){
            let b=0;
            let a=a+1;
            return function1(a,b,c);
        } else if(a==24){
            let a=0;
            return function1(a,b,c);

        }else{
            return console.log("hora")
        }
    }
    console.log(function1(a,b));
}