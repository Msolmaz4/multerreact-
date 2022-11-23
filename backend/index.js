const express = require('express')
const app = express()
//dokumanttan yaparak yaptim
//upload yaptiktan sonra uploadas dosyasi yaptim
//ilk commit bak postman resim gonderildi
//body form data name avatar file secildi ve resim yapildi donus alindi
const multer =require('multer')
const upload = multer({dest:'./uploads/'})

app.post('/uploadFile',upload.single('avatar'),(req,res)=>{
    res.send('hallo world')
})

const Port = 4300



app.listen(Port,()=>{
    console.log('erst')
})