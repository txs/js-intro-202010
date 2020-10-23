// @pg 9-16
var person = {
    name    :   "黃曉明"    , //字串型態
    age     :   27      , //數字型態
    speak   : function(){ //函式型態
        console.log("hi! 你好");
    }
}

for(var i in person){
    console.log('key:'+i+ '\tvalue:'+ person[i]);
}