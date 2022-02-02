const express = require('express');
const Admin = require("../models/Admin")
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SEC = "HeavyDriver(100)";


//ROUTE1: Createadmin (/api/auth/createadmin)
router.post("/createadmin", [
    body('name', "Enter a valid name").isLength({min:2}),
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
] ,async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
    let admin = await Admin.findOne({email: req.body.email})
    if(admin){
        return res.status(400).json({error: "Sorry a admin with this email already exists"})
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    admin = await Admin.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
    });
    const data = {
        admin:{
            id: admin.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SEC);
    res.json({Success: "admin created successfully", authtoken:authtoken});
    }   
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some unexpected error occured");    
    }
})


//ROUTE2: Authenticateadmin (/api/auth/login)
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
        let admin = await Admin.findOne({email});
        if(!admin){
            success = false;
            return res.status(400).json({error: "Please login with correct credentials"});
        }    
        const passwordCompare = await bcrypt.compare(password, admin.password);
        if(!passwordCompare){
            success = false;
            return res.status(400).json({error: "please login with correct credentials"});
        }
        const data = {
            admin:{
                id: admin.id
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