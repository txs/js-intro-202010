


// a, b 值互換上課提到以下作法
let a = 1
let b = 2
let c
console.log('a:' + a + ', b:' + b);
c = a
a = b
b = c
console.log('a:' + a + ', b:' + b);

//使用 push 與 shift
let a = 1
let b = 2
console.log('a:' + a + ', b:' + b);
a = [a]
a.push(b)
b = a.shift() // b = 1, a = [2]
a = a.shift() // b = 1, a = 2
console.log('a:' + a + ', b:' + b);

// 試問使用 unshift 與 pop 的作法？