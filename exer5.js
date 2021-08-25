function toMaiusculaPrimeira (frase:String) {



frase = frase.toLowerCase().replace(/(?:^|\s)\S/g, 

function(toMaiusculaPrimeira) {
  return toMaiusculaPrimeira.toUpperCase();
});
console.log(frase);
}

toMaiusculaPrimeira("fun deu certo")

//modo de produção 

"use strict";
function toMaiusculaPrimeira(frase) {
    frase = frase.toLowerCase().replace(/(?:^|\s)\S/g, function (toMaiusculaPrimeira) {
        return toMaiusculaPrimeira.toUpperCase();
    });
    console.log(frase);
}
toMaiusculaPrimeira("fun deu certo");
