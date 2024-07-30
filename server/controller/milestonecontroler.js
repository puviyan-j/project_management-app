const mailstone = require("../models/mailstonteschema")

const addmilestone = async (req, res) => {

    try {
        const data = new mailstone({
            ...req.body
        })

        const save = await data.save();
        res.send(save)

    } catch (error) {
        res.status(500).send({ message: "internal server error" })
    }


}

const getmilestone = async (req, res) => {
    try {
        const data = await mailstone.find({ projectid: req.params.id });
        res.send(data)
    } catch (error) {
        res.status(500).send({ message: "internal server error" })
    }
}

const updatemilestone = async (req, res) => {
    try {
        const data = await mailstone.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.send(data)
    } catch (error) {
        res.status(500).send({ message: "internal server error" })
    }
}

const deletemilestone = async (req, res) => {
    try {
        mailstone.findByIdAndDelete(req.params.id).then(() => {
            res.status(200).send("deleted")
        })
    } catch (error) {
        res.status(500).send({ message: "internal server error" })
    }
}

module.exports = { addmilestone, getmilestone, updatemilestone, deletemilestone }