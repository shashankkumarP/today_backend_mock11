const express = require("express");
const app = express();
const router = express.Router();
// const schema_model = require("../models/schema.js")



router.get("/",(req,res)=>{
    res.send("hello")
})


module.exports = router;