const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDb Connected!");
    }
    catch(error){
        console.error('MongoDb Connection Failed', error.message);
        process.exit(1); //Terminating server if connecton fails
    }
};

module.exports = connectDB;
