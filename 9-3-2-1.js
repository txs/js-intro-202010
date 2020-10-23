// @pg 9-17
var person = {
    name    :   "黃曉明"    , //字串型態
    age     :   27      , //數字型態
    speak   : function(){ //函式型態
        console.log("hi! 你好");
    }
}

console.log(Object.keys(person));

for(var i of Object.keys(person)){
    // console.log('key:'+i+ '\tvalue:'+ person[i]);
    console.log(i);
    // console.log(person[i]);
}