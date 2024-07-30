const taskschema = require("../models/taskschema");

const addTask = async (req, res) => {
    console.log(req.body)

    try {

        const data = new taskschema({ ...req.body });
        const save = await data.save();
        res.send(save)


    } catch (error) {
        res.status(500).send({ message: "internal server error" })
    }


}

const gettasklist = async (req, res) => {
    try {
        const data = await taskschema.find({ tasklistId: req.params.id });
        res.send(data)

    } catch (error) {
        res.status(500).send({ message: "internal server error" })
    }
}

module.exports = { addTask ,gettasklist }