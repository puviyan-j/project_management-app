const userSchema = require("../models/userschema")
const bcrypt = require("bcrypt")

const signup = async (req, res) => {

    const user = await userSchema.findOne({ email: req.body.email })

    if (user) {
        return res.status(401).send({ error: "email already register" })
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const data = new userSchema({ ...req.body, password: password });

    const save = await data.save();
    const { _id, name, email } = save

    res.status(201).send({ _id, name, email })

}

const login = async (req, res) => {

    const user = await userSchema.findOne({ email: req.body.email })

    if (!user) {
        return res.status(401).send({ error: "user notfound" })
    }
    const password = await bcrypt.compare(req.body.password, user.password)

    if (!password) { return res.status(401).json({ error: "password incorrect" }) }

    const { _id, name, email } = user

    res.status(200).send({ _id, name, email })
}

module.exports = { signup, login }