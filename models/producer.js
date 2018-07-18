let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt-nodejs');

var Producer = new Schema({
    username: {type: String, required: true, index:{ unique: true }},
    company: {type: String, required: true, select: false},
    soundcloud: {type: String, required: false}
});


module.exports = mongoose.model('Producer', Producer);