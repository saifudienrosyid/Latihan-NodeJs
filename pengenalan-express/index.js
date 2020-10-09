const express = require('express')
const app =express()

app.set('view engine', 'ejs')

app.get('/about', function (req, res, next) {
    console.log(req.query)
    res.send({success:true, keyword:req.query.keyword})    
})

app.get("/txt-response", function (req, res, next) {
    res.send("Hello world")
})

app.get('/product/:productid', function (req, res, next) {
    res.send({success:true, productId: req.params.productId})
    //   console.log(req=params)
   // res.send('success')
})

app.get('/multi-handler', function (req, res, next) {  
    //va;idasi rwquest
    if (req.query.keyword==='satu') {
        return next()
    }

    return res.send('Keyword harus satu')
}, function (req, res, next) {
//handlerequest
    res.send('Sukses')
})

app.get('/index', (req,res, next)=>{
    console.log(__dirname)
    res.sendFile(__dirname+'/index.html')
})

app.get('/pdf', (req,res, next)=>{
    console.log(__dirname)
    res.sendFile(__dirname+'/Tugaspdf.pdf')
//    res.download(__dirname + '/Tugaspdf.pdf', 'Tugas.pdf')
})

//app.get('/pelatihan', function (req,res,next) {
 //   res.render('contoh', {subBab: req.query.subBab})
//})

app.get('/pelatihan', function (req, res, next) {
    res.render('tesrender', { subBab: req.query.subBab })
  })
//kegunaan dasar next di express, apabila ingin membuat handler eror secara default
//
app.get('/error', (req,res,next)=>{
    next(new Error('contoh error'))
})

app.use((err, req,res, next)=>{
    res.send('terjadi eror')
})
app.get('/category/:productCategory/product/:productId', (rea,res,next)=>{
    res.send(req.params)
})

app.listen(8000, function () {
    console.log('App listen on port 8000')
})