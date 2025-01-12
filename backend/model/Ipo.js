  const mongoose=require("mongoose");
const ipoSchema=new mongoose.Schema({
})

const ipoModel=mongoose.model("Ipo",ipoSchema);
module.exports=ipoModel;
