const mongoose = require('mongoose');

let EmployeeSchema = new mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        default : Date.now()
    }
});
let Employee = mongoose.model('employee' , EmployeeSchema);
module.exports = Employee;