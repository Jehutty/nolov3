let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt-nodejs');

var User = new Schema({
    username: {type: String, required: true, index:{ unique: true }},
    password: {type: String, required: true, select: false}
});

User.pre('save', function (next) {
    var user = this; 
    //hash the pw only if the pw has been changed or user is new
    if(!user.isModified('password')) return next();

    //generate the hash
    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err) return next(err)

        //change the pw to hashed version
        user.password = hash;
        next();
    });
});

User.methods.comparePassword = function(password) {
    let user = this;
    return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', User);