const router = require('express').Router();
let Outpass = require('../models/Passes');

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const branch = req.body.branch;
    const regno = req.body.regno
    const block = req.body.block;
    const room = req.body.room;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const formState = req.body.formState;
    const zip = req.body.zip;
    const description = req.body.description;
    const fromDate = Date.parse(req.body.fromDate);
    const fromTime = req.body.fromTime;
    const toDate = Date.parse(req.body.toDate);
    const toTime = req.body.toTime;

    const newOutpass = new Outpass({
        firstname, lastname, email, phone,
        branch, regno, block, room, address1,
        address2, city, formState, zip, description,
        fromDate, fromTime, toDate, toTime
    });

    newOutpass.save()
        .then(() => res.json('Outpass added'))
        .catch(err => res.status(400).json('Error: ' + err))

})
module.exports = router;