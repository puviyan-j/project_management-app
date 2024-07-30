const mongoose = require("mongoose");

const commentschema = new mongoose.Schema({
    taskid: String,
    userid: String,
    comment: String,
})

module.exports = mongoose.model("comments",commentschema)