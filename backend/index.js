const express = require('express')
const app = express()
//bunu multer fs renamr yaptik resim geldi
const fs = require('fs')
//dokumanttan yaparak yaptim
//upload yaptiktan sonra uploadas dosyasi yaptim
//ilk commit bak postman resim gonderildi
//body form data name avatar file secildi ve resim yapildi donus alindi
const multer =require('multer')
const upload = multer({dest:'./uploads/'})
//aciklamsui atta var
app.use(express.static('./uploads'))

app.post('/uploadFile',upload.single('avatar'),(req,res)=>{
    //burada geleni gormek icin consol yaptik
   // console.log('reg.file',req.file)
   //sonra burada gelen dosyanin tipimni bulfuk
   let fileType = req.file.mimetype.split('/')[1]
   //geleni gorduk filetype [ 'image', 'jpeg' ]
   //console.log('filetype',fileType)
   //sonra yeniden comsolda bakmak icin boylecc jpeh yapariy
   //console.log('filetype',fileType[1]) sonra split yanin abirinci terin almaki cin []ekleriz
   //sonra filename bir duyenleme yapariy
   let newFileName = req.file.filename+'.'+fileType
   //console.log('filename',newFileName)
   //dosyayi yenifen adlandirmak iicn fs.rename kullandim
   //bu arada unutm fs import etmeyi
   fs.rename(`./uploads/${req.file.filename}`,newFileName,function() {
    console.log('callback')
    res.send('hallo world')
   })
 //bundan sonra on trafda goruntulemek icn statailk yapmamaiu gerekiyor
 //yukarida app.use(express.sattaic yaptik)
   
})

const Port = 4300



app.listen(Port,()=>{
    console.log('erst')
})