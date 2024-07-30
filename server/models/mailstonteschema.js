const mongoose = require("mongoose");

const mailstoneschema = new mongoose.Schema({
    name: { type: String },
    dueDadte: { type: String },
    startDate: { type: String },
    projectid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
       
    },
    creater: { type: String },
    milestone: { type: String }
})
module.exports = mongoose.model("mailstone", mailstoneschema);