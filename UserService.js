const mongoose=require("mongoose");
const UserModel=require("../Model/UserModel");

exports.findbyemail=async(email)=>{
    return await UserModel.findOne(email).select("id").lean();
}

exports.createUser=async(data)=>{
    return await UserModel.create(data);
}