const project = require('../models/Projects.js');

exports.showData = async (req, res) =>{


    try{
        const projects = await project.find({})
        console.log(projects);
        res.status(200).json(projects);
    }
    catch(error){
        console.log(error);
        res.status(400).json({error: 'Error fetching data'});
    }
};