const fs= require('fs')
fs.open('text2.txt','w',(err,file)=>{
    if(err){
        return console.error(err)
    }
    console.log('Saved!')
})