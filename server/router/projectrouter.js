const express = require("express");
const router = express.Router();
const {addproject ,getproject} = require("../controller/projectcontroller")

router.post("/addproject",addproject)
router.get("/",getproject)

module.exports =router
