import mongoose from 'mongoose'

async function connectDB(){
    mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log('Database connected successfully');
    })
    .catch(err =>{
        console.error('Database connection failed:', err.message);
        process.exit(1);
    })
}

export default connectDB;