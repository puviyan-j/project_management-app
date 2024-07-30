const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: { type: String },
    priority: { type: String },
    startDate: { type: String },
    dueDate: { type: String },
    parentId: { type: String },
    tasklistId:{type:String},

})

module.exports = mongoose.model("tasks", taskSchema)