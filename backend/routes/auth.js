const express = require('express');
const User = require("../models/User")
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SEC = "HeavyDriver(100)";


//ROUTE1: Createuser (/api/auth/createuser)
router.post("/createuser", [
    body('name', "Enter a valid name").isLength({min:2}),
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
] ,async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
    let user = await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
    });
    const data = {
        user:{
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SEC);
    res.json({Success: "User created successfully", authtoken:authtoken});
    }   
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some unexpected error occured");    
    }
})


//ROUTE2: Authenticateuser (/api/auth/login)
router.post("/login", [
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password cannot be blank").exists(),
] ,async (req,res)=>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            success = false;
            return res.status(400).json({error: "Please login with correct credentials"});
        }    
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            success = false;
            return res.status(400).json({error: "please login with correct credentials"});
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SEC);
        success = true;
        res.json({success, authtoken})
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some unexpected error occured");    
    }
})

module.exports  = router;