const express =require('express')
const app = express()
const port = 3000
//memanggil library body-parser
const bodyParser = require("body-parser");

const Mongoose = require("./mongoModel/mongoConfig")
const PersonModel = Mongoose.model("person",{
    firstname: String,
    lastname: String
})

//config body-parser
app.use(bodyParser.urlencoded({extended:true})); //menangkap tipe urlencode dalam bentuk body-parser
app.use(bodyParser.json()); // menagkap url dalam bentuk json

//commit -m "config body parser"

app.get('/',(req, res) => res.send('Hello World'))
//membuat request post
//nama request firstname,lastname
app.post('/hello', function(req,res){
    const respon = {
        statusCode: 200,
        error:"",
        message: "Hello json",
        content: req.body
    }
    res.json(respon);
})
// commit lagi dengan nama "membuat request post" lalu push

app.post('/profile/create', async (req, res) => {

    //Do something here
    console.log(req.body)
    const insert = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    var person = new PersonModel(insert);
    var result = await person.save();
    const response = {
        statusCode: 200,
        error: "",
        message: "Create Person",
        content: result
    }
    res.json(response);
})
//menampilkan semua data
// url http://localhost:3000/profile/list
app.get('/profile/list', async (req, res) => {
    var person = await PersonModel.find().exec();
    const response = {
        statusCode : 200,
        error: "",
        message: "List Person",
        content: person
    }
    res.json(response);
})

//default profil data method get
//http://localhost:3000/profile/detail/idmmongo
app.get('/profile/detail/:id', async (req, res) => {
    let statusCode= 200
    let message= "Detail Person"
    var person = await PersonModel.findById(req.params.id).exec();
    const response = {
        statusCode: 200,
        error: message,
        message:message,
        content: person
    }
    res.status(statusCode).json(response);
})

//update data profile menggunakan method put
//url : http://localhost:3000/profile/update/idmongo
app.put('/profile/update/:id', async (req, res)=>{
    let statusCode = 200
    let message = "Update Person"
    var person = await PersonModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    const response = {
        statusCode : statusCode,
        error : message,
        message : message,
        content : person
    }
    res.status(statusCode).json(response);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!` ))

