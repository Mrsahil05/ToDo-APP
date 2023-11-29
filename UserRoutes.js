const express=require("express");

const router=express.Router();

const {create}=require("../Controller/Createuser");
const{update}=require("../Controller/Updateuser");

router.post("/add",create);
router.post("/update/:id",update);


module.exports=router;