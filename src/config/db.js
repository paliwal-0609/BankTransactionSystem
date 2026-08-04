const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log('Database connected successfully');
    })
    .catch(err =>{
        console.error('Database connection failed:', err.message);
        process.exit(1);
    })
}

module.exports =  connectDB;