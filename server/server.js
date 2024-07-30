const express = require("express");
const mongoose = require("mongoose");
const projectrouter = require("./router/projectrouter")
const mailrouter = require("./router/mailstonerouter");
const taskrouter = require("./router/taskrouter");
const commentrouter = require("./router/commentrouter");
const userrouter = require("./router/userrouter")


const scheam = require("./models/projectschema");
const cors = require("cors")

const app = express();

mongoose.connect("mongodb+srv://puviyanj49:KYCJv6ameaznL4jl@cluster0.ngheo0q.mongodb.net/list")
    .then(() => {
        console.log("db connected")
    }).catch(() => {
        console.log("db not connected")
    })
app.use(cors());
app.use(express.json());

app.use("/api/user", userrouter);
app.use("/api", projectrouter)
app.use("/api/mail", mailrouter);
app.use("/api/task", taskrouter);
app.use("/api/comment", commentrouter)




app.listen(5000, () => {
    console.log("server connected")
})