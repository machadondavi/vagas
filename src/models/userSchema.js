const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    tel: {
        type: Number,
        required: true,
    }
   
});

module.exports = mongoose.model('User', schema);