const mongoose = require("mongoose")
require('dotenv').config();

const dbcon = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log(error)
        process.exit(1) // DETIENE LA APP POR COMPLETO    
    }
}


module.exports = dbcon