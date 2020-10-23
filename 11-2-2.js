var obj1 = {a:10,b:20,c:30}
var obj2 = {a:obj1.a,b:obj1.b,c:obj1.c}
obj1.b= 100
console.log(obj1);
console.log(obj2);
