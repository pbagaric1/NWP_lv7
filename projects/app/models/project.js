var mongoose = require('mongoose');  
var bcrypt   = require('bcrypt-nodejs');

var projectSchema = new mongoose.Schema({  
  naziv_projekta: String,
  opis_projekta: String,
  cijena_projekta: Number,
  obavljeni_poslovi: String,
  datum_pocetak: Date,
  datum_zavrsetak: Date,
  clanovi: { type:String, default: "-"},
  voditelj: String
});

module.exports = mongoose.model('Project', projectSchema);