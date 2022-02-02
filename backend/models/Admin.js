const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD:backend/models/Admin.js
const AdminSchema = new Schema({
    name:{
=======
const UserSchema = new Schema({
    name: {
>>>>>>> 71dc61dbcf7036b46ba3796c19b22e8262301077:backend/models/User.js
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
<<<<<<< HEAD:backend/models/Admin.js
  });
  const Admin = mongoose.model('admin', AdminSchema);
  Admin.createIndexes();
  module.exports = Admin;
=======
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);
User.createIndexes();
module.exports = User;
>>>>>>> 71dc61dbcf7036b46ba3796c19b22e8262301077:backend/models/User.js
