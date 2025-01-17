const mongoose = require('mongoose');

const connectDB = async () => {
 try{
  const connect = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Database connected`);
 }catch(err){
  console.log(err.message);
  process.exit(); 
 }
}


module.exports = connectDB;