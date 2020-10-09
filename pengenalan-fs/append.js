const fs=require('fs')

fs.appendFile('text1.txt','Hello world', function(){
    console.log('Berhasil menulis file')
})