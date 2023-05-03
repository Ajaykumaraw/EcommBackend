const router = require('express').Router();

router.get("/usertest",(req, res)=>{
    res.send("user test is successfull")
})

router.post("/userPostTest",(req,res)=>{
  
})
module.exports = router;