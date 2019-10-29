const Mongoose = require('mongoose'); //memanggil library mongoose
Mongoose.connect('mongodb://localhost/belajarmongo'); //mengkoneksikan ke db mongo
module.exports = Mongoose; //export module mongoose
//commit -m "Config mongo dan koneksi ke db"

