let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt-nodejs');

var Event = new Schema({
    name: {type: String, required: true, index:{ unique: true }},
    company: {type: String, required: true, select: false},
    producers: [{type: String}],
    date: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Producer', Producer);