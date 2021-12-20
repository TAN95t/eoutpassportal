const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required : true
    },
    registration:{
        type: Number,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    date:{
        type: Date,
        default: Date.now
    },
    fromDate:{
        type: String,
        required: true
    },
    toDate:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
  });