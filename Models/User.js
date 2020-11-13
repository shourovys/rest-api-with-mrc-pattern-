const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        },
        email: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
