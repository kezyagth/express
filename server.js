const express =require('express')
const app = express()
const port = 3000
//memanggil library body-parser
const bodyParser = require("body-parser");
//config body-parser
app.use(bodyParser.urlencoded({extended:true})); //menangkap tipe urlencode dalam bentuk body-parser
app.use(bodyParser.json()); // menagkap url dalam bentuk json

//commit -m "config body parser"

app.get('/',(req, res) => res.send('Hello World'))
//membuat request post
app.post('/hello', function(req,res){
    const respon = {
        statusCode: 200,
        error:"",
        message: "Hello json"
    }
    res.json(respon);
})
// commit lagi dengan nama "membuat request post" lalu push
app.listen(port, () => console.log(`Example app listening on port ${port}!` ))

