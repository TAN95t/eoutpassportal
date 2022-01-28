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
    regno: {
        type: Number,
        required: true
    },
    block: {
        type: String,
        required: true
    },
    room: {
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
    formState: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    fromDate: {
        type: Date,
        required: true
    },
    toDate: {
        type: Date,
        required: true
    },
    fromTime: {
        type: String,
        required: true
    },
    toTime: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: false,
        default: false
    }
}, {
    timestamps: true
});

const Outpass = mongoose.model('Outpass', OutpassSchema);
module.exports = Outpass;