const express = require('express');
const Pass = require('../models/outPass');
const router = express.Router();
const { body, validationResult } = require('express-validator');






// outpass application form input. 
// Login not required
router.post('/outpassSubmit', [], async (req, res) => {
        try {
            const { name, email, branch, block, parentsphone, phone, registrationNo, roomNo, address1, address2, city, state, zip, description, fromDate, toDate, applicationDate} = req.body;

            const pass = new Pass({ name, email, branch, block, parentsphone, phone, registrationNo, roomNo, address1, address2, city, state, zip, description, fromDate, toDate, applicationDate })

            const savedPasses = await pass.save()

            res.json(savedPasses)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })