const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

router.get('/contacts',(req,res,next)=>{
    Contact.find((err, contacts) => {
        res.json(contacts)
    })
});

router.post('/contact',(req,res,next)=>{
    let newContact = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone
    });
    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: "Failed to add contact"});
        } else {
            res.json({msg: "Successfully added your contact"});
        }
    });
});

router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id:req.params.id}, (err, result)=>{
        if(err){
            res.json({msg: "Failed to delete contact"});
        } else {
            res.json({msg: "Successfully deleted the contact"});
        }
    });
});

module.exports = router;