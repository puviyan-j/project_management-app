const express = require("express");
const router = express.Router();
const {addcomment,getcomment} = require("../controller/commentcontroller")

router.post("/addcomment",addcomment)
router.get("/addcomment/:id",getcomment)

module.exports = router


