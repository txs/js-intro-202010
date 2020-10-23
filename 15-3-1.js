// @pg 15-16
// Class
function Queue(){
    var Q = []
    this.show = ()=>{
        console.log(Q.toString());
    }
    this.firstIn = (i)=>{
        Q.push(i)
    }
    this.firstOut =()=>{
        Q.shift()
    }
}

let a = new Queue()
console.log(a);
// a.firstIn(2)
// a.firstIn(3)
// a.firstIn(5)
// a.firstOut()
// a.show()


