// const UserModel=require("../Model/UserModel");
const UserService=require("../Services/UserService");

exports.create=async(req,res)=>{
    try{
        const {email}=req.body;
        const data=req.body;
         const user=await UserService.createUser(data);
            res.status(210).json({
                success:true,
                data:user
            })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error
        })
    }
}