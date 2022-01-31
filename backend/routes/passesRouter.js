const router = require('express').Router();
let Outpass = require('../models/Passes');

router.route('/add').post((req, res) => {
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const branch = req.body.branch;
    const regno = Number(req.body.regno);
    const block = req.body.block;
    const room = Number(req.body.room);
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const appFormState = req.body.formState;
    const zip = Number(req.body.zip);
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

});

router.route('/').get((req, res) => {
    Outpass.find()
        .then(outpasses => res.json(outpasses))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;