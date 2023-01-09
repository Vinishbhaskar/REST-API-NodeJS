const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLenght: 3
    },
    reg:{
        type: Number,
        required: true,
        unique: true,
        minLenght: 11,
    },
    email:{
        type:String,
        required: true,
        unique:[true,"Email is already Present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invlaid Email ID")
            }
        }
    },
    phone:{
        type:Number,
        required: true,
        unique: true,
        minLength :10
    }
})

// We will create new collection

const Student =  new mongoose.model('Student', studentSchema);

module.exports = Student;