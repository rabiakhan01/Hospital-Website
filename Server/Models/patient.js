const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
    userName : String,
    phoneNo : String,
    recordNo : String,
    reasonVisit : String,
    department : String,
    date : Date,
    time : String,

})
module.exports = mongoose.model("patient", PatientSchema);