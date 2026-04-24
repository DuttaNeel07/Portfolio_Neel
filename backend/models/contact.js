const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema(
    {
    name:{
        type: String,
        required: false,
    },
    message:{
        type: String,
        required: true,
    },
    },
    {
        timestamps: true,
    },
);

module.exports= mongoose.model('contact', contactSchema);