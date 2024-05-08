const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
    title: {type: String,required:true},
    company: {type: String},
    location: {type: String},
    about: {type: String},
    responsibility: {type: String},
    openings: {type: Number},
    salary: {type: String},
    experience: {type: String},
    type: {type: String}
},{timestamps:true});

const JobsModel = mongoose.model('Job', JobsSchema);

module.exports = JobsModel;