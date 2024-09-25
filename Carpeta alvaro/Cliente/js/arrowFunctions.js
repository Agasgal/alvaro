"use strict"
{
    const aprendiendo = function (js) {
        console.log("Aprendiendo a " + js);
    }

    //Arrow function
    /**
        () => one sentence;
        () => {
            s1;
            s2;
            ...
            };
        (param1) => {
            console.log(param1);
            sentence2;
            ...
        };
        (param1,param2) => {
            console.log(param1);
            console.log(param2);
            ...
        };
    */

    const aprendiendo2 = (param1, param2) => {
        console.log(param1);
        console.log(param2);
        return param1+param2;
    };
    let x = aprendiendo2 (10,20);
    console.log(x);

}