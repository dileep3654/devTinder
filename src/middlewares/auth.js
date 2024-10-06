const adminAuth=(req,res,next)=>{
    const token="xyz"
    let authentication=   token==="xyz"
    if(!authentication){
      res.status(401).send("Unauthorized request")
    }else{
        next()
    }

}
const userAuth=(req,res,next)=>{
    const token="xyzdsafd"
    let authentication=   token==="xyz"
    if(!authentication){
      res.status(401).send("Unauthorized request")
    }else{
        next()
    }

}
module.exports={adminAuth,userAuth}
