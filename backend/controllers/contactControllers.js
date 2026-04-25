const contact = require('../models/Contact.js');

exports.addData = async(req, res ) =>{
    try{
        const {name, message} = req.body;

        if(!message){
            return res.status(400).json({error :'message field not found!'});
        }

        const addcon = await contact.create({
            name: name || "Anonymous",
            message: message,

        });

        res.status(201).json({addcon});
    }

    catch(error){
        console.log(error);
        res.status(400).json({error: 'Error adding data'});
    }
}