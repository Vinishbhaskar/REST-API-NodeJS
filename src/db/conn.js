const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://0.0.0.0:27017/students-api",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() =>{
    console.log('Connection Sucessful');
}).catch((e) =>{
    console.log('No Connection');
})