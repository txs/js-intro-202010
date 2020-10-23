var func1 = function (x) { return x + 1 };
var func2 = (x) => { return x + 1 };
var func3 = (x) => x + 1 

console.log(func1(5));
console.log(func2(5));
console.log(func3(5));

//
var funcY = (x) => { 
    let y = x+1
    return y 
};