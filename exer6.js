function maior (arr:Array<number>) {

var max = arr.reduce(function(a, b) {
  return Math.max(a, b);
});
console.log(max)
}

maior([1,800,3,500])

//modo de produção 

"use strict";
function maior(arr) {
    var max = arr.reduce(function (a, b) {
        return Math.max(a, b);
    });
    console.log(max);
}
maior([1, 800, 3, 500]);
