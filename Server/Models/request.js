const mongoose = require('mongoose');
const RequestSchema = new mongoose.Schema({
    userName : String,
    email : String,
    subject : String,
    message : String

})
module.exports = mongoose.model("request", RequestSchema);