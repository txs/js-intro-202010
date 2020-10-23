for(var i =2; i<10;i++){
    // console.log('i:'+i)
    let singleLine = ""
    for(var j = 1; j<10; j++){
        singleLine+= (i+'x'+j+'='+i*j+'\t')
        // console.log(i+'x'+j+'='+i*j);
    }
    console.log(singleLine)
}