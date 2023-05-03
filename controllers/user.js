const userSchema = require('../models/User.js');
const cryptoJS = require('crypto-js');

/* REGISTER FUNCTION */ 
async function register(req,res){
     // console.log(req.body.username);
     const newUser = new userSchema({
            username: req.body.username,
            email: req.body.email,
            password: cryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
             
        })
        try {
            const savedUsre = await newUser.save();
            console.log(savedUsre);
            res.status(201).json(savedUsre);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
}

/*LOGIN METHODS */
async function login(req,res){
    try {
        const user = await userSchema.findOne({username:req.body.username});
        !user && res.status(401).json("user not found");
        console.log('login done'+user);
         const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
        // if(req.body.password == user.password){
        //     res.status(200).json(user);
        // }else{
            user.password !==req.body.password && res.status(401).json("wrong credential");

        //}
        const password = hashedPassword.toString(CryptoJS.enc.Utf8);
        password !==req.body.password && res.status(401).json("wrong credential");

        res.status(200).json(user);
    } catch (error) {
        
    }
}



module.exports = {register,login};
