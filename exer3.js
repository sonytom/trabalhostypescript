
let x 
let c


function menor (x: number,c: number) {
    

    if (x < c){
    console.log("x é menor que c")
}else if(c < x){
    console.log("c é menor que x")
}

}

menor (200,4)
//modo de produção 
"use strict";
let x;
let c;
function menor(x, c) {
    if (x < c) {
        console.log("x é menor que c");
    }
    else if (c < x) {
        console.log("c é menor que x");
    }
}
menor(200, 4);