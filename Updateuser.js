const UserModel=require("../Model/UserModel");

exports.update=async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,email,age}=req.body;

        const dta=await UserModel.findByIdAndUpdate(
            {_id:id},
            {name:name,email:email,age:age}
        )

        res.status(200).json({
            success:true,
            data:dta
        })
    }
    catch(error){
        res.status(500).json({
            message:error
        })
    }
}