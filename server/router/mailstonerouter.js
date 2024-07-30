const express = require("express");
const route = express.Router();
const { addmilestone, getmilestone, updatemilestone ,deletemilestone } = require("../controller/milestonecontroler")

route.post("/addmail", addmilestone);
route.get("/getmile/:id", getmilestone);
route.put("/getmile/update/:id", updatemilestone);
route.delete("/getmile/delete/:id", deletemilestone);

module.exports = route