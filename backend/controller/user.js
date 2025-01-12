

const register=async(req,res)=>
  {  try
    {
      
    }
    catch(err)
    {
      res.json({
        success:false,
        message:err.message})
    }
    
  }

const login=async(req,res)=>
  {
    try
    {
      
    }
    catch(err)
    {
      res.json({
        success:false,
        message:err.message})
    }
  }
const getProfile=async(req,res)=>
  {
    try
    {
      
    }
    catch(err)
    {
      res.json({
        success:false,
        message:err.message})
    }
  }

module.exports={login,register,getProfile};
