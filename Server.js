const express=require("express");
const app=express();

app.use(express.json());

const routes=require("./Router/UserRoutes");
app.use("/",routes);

require("./Middleware/Database");

app.listen(3000,()=>{
    console.log("server started")
})