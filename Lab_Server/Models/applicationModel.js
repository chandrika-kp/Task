const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
