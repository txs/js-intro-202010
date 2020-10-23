var txt = "我是XXX，我在資策會上課，資策會的全名\
是XXX，目前的課程是在學習javascript。" 
var cut = 'java'
var cutPos = txt.indexOf(cut)
//console.log(txt.indexOf(cut));
console.log(txt.substr(cutPos,cut.length));
console.log(txt.substr(txt.indexOf(cut),cut.length));