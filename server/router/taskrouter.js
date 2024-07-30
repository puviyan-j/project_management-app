const express = require("express")
const router = express.Router();
const {addTask ,gettasklist} = require("../controller/taskcontroler")


router.post("/addtask",addTask);
router.get("/gettask/:id",gettasklist);

module.exports = router