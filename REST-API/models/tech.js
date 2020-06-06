const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create TECH Schema
const TechSchema = new Schema({
    "name": {
        type: String,
        required: [true, "Name is required."],
        unique: [true, "Already exists."]
    },
    "founder": {
        type: String,
        required: [true, "Founder-Name is required."]
    },
    "year": Number,
    "extra-info": String
});



//------------------------MODELS
//create FAANG model
module.exports.FAANG = mongoose.model('faang', TechSchema);

//create LANG model
module.exports.LANG = mongoose.model('lang', TechSchema);