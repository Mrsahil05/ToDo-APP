const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://riyadhingra248:Riya1234@cluster0.fcu50nr.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Database connect ho gya"))
.catch((error)=>console.log(error));