const Mongoose = require('mongoose'); //memanggil library mongoose
Mongoose.connect('mongodb://localhost/belajarmongo'); //mengkoneksikan ke db mongo
module.exports = Mongoose; //export module mongoose
//commit -m "Config mongo dan koneksi ke db"

const Mongoose = require('./mongoModel/mongoConfig')
const PersonModel = Mongoose.model("person", {
    firstname: String, //field firstname
    lastname: String //field lastname
});
//commit -m "Memanggil Mongoconfig dan membuat model PersonModel sebagai penampung collection person"
app.get('/',(req, res) => res.send('Hello World'))