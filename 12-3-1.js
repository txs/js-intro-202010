function fun1(number, ...theArgs) {
    console.log(theArgs.length); 
    if (theArgs.length > 0)
        return theArgs.join();
} 
// console.log(fun1(5,6,7))
fun1(5,6,7)
// let str = fun1(5,6,7)
// console.log(str);