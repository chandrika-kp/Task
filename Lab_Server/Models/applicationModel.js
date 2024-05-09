const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    experience: {
        type: Number,
    },
    portfolioURL: {
        type: String,
    },
    currentCompanyName: {
        type: String,
    },
    currentCTC: {
        type: String,
    },
    expectedCTC: {
        type: String,
    },
    jobLocation: {
        type: [String],
    },
    jobType: {
        type: [String],
    },
    previousExperiences: {
        type: String,
    }
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
