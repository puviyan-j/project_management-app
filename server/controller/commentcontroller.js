const commentschema = require("../models/commentschema");

const addcomment = async (req, res) => {
    try {
        const data = new commentschema({ ...req.body });
        const save = await data.save();
        res.send(save)
    }
    catch (error) {
        res.status(500).send({ message: "internal server error" })
    }
}
 const getcomment = async (req,res)=>{
    try {
        const data = await commentschema.find({taskid:req.params.id})
        res.send(data)


    } catch (error) {
        res.status(500).send({ message: "internal server error" })
    }
 }
module.exports = {addcomment,getcomment}