
const mongoose = require('mongoose')

const Course = mongoose.Schema({


    user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"User",
    },
    title: {
        type:String,
        required: true 
    },
    content:{
    type:String,
    required: true 
    },
    videos:Number,
    active:Boolean
});

module.exports = mongoose.model("courses", Course)