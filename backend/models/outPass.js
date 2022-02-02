const mongoose = require('mongoose');
const { Schema } = mongoose;


const outPassSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    branch:{
        type: String,
        required: true,
    },
    block:{
        type: String,
        required : true
    },
    parentPhone:{
        type: Number,
        required : true
    },
    phone:{
        type: Number,
        required : true
    },
    registrationNo:{
        type: Number,
        required : true
    },
    roomNo:{
        type: String,
        required : true
    },
    address1:{
        type: String,
        required: true
    },
    address2:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zip:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required : true
    },
    fromDate:{
        type: Date,
        default: Date.now
    },
    toDate:{
        type: Date,
        default: Date.now
    },
    applicationDate:{
        type: Date,
        default: Date.now
    }
  });
  const outPass = mongoose.model('passes', outPassSchema);
  outPass.createIndexes();
  module.exports = outPass;