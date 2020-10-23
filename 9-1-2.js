// @pg 9-5
var  person = {}; //但這只是個空物件
console.log(person);
//我們可以為物件新增不同數據型態的內容
var person = {
    name    :   "黃曉明"    , //字串型態
    age     :   27      , //數字型態
    speak   : function(){ //函式型態
        alert("hi! 你好");
    }
}
console.log(person);
   
    
    
    