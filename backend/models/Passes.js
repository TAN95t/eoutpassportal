const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OutpassSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    regnumber: {
        type: Number,
        required: true
    },
    block: {
        type: String,
        required: true
    },
    roomnum: {
        type: Number,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    fromDate: {
        type: String,
        required: true
    },
    toDate: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Outpass = mongoose.model('Outpass', OutpassSchema);
module.exports = Outpass;