const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    createdBY: {type:String},
    name:{type:String},
    dueDate:{type:String},
    startDate:{type:String}
});
module.exports =  mongoose.model("projects",projectSchema);

