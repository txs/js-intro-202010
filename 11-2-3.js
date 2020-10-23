var a = [1,2,3,4];
var b = [];
for(var i = 0; i < a.length; i++) { b.push(a[i]) }
// for(var i of a) { b.push(i) }
a[2] = 5
console.log(a);
console.log(b); //[1,2,3,4]
