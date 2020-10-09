const fs= require('fs')

fs.stat('text1.txt', function (err, stats) {
    if (err) {
        return console.error(err)
    }
    console.log(stats)
})

fs.unlink('text2.txt',  function(err){
    if (err) {
        return console.error(err)
    }
    console.log('Success')
})