const projectschema = require("../models/projectschema");

const addproject = async (req, res) => {
   

    try {

        const data = new projectschema({ ...req.body });
        const save = await data.save();
        res.send(save);

    } catch (error) {

        res.status(500).send({ message: "internal server error" })

    }
};

const getproject = async (req, res) => {

    try {
        const data = await projectschema.find({});
        res.send(data)

    } catch (error) {

        res.status(500).send({ message: "internal server error" })
    }
};

module.exports = { addproject ,getproject}