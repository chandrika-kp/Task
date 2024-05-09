const express = require('express');
const router = express.Router();
const Application = require('../Models/applicationModel');

// POST route to submit an application
router.post('/', async (req, res) => {
    try {
        const {
            jobTitle,
            firstName,
            lastName,
            email,
            phoneNumber,
            experience,
            portfolioURL,
            currentCompanyName,
            currentCTC,
            expectedCTC,
            jobLocation,
            jobType,
            previousExperiences
        } = req.body;

        // Create a new application document
        const newApplication = new Application({
            jobTitle,
            firstName,
            lastName,
            email,
            phoneNumber,
            experience,
            portfolioURL,
            currentCompanyName,
            currentCTC,
            expectedCTC,
            jobLocation,
            jobType,
            previousExperiences
        });

        // Save the application to the database
        const savedApplication = await newApplication.save();

        res.status(201).json(savedApplication);
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).json({ message: 'Error submitting application' });
    }
});

// GET route to fetch all applicants
router.get('/', async (req, res) => {
    try {
        // Fetch all applications from the database
        const applicants = await Application.find();
        res.status(200).json(applicants);
    } catch (error) {
        console.error('Error fetching applicants:', error);
        res.status(500).json({ message: 'Error fetching applicants' });
    }
});

module.exports = router;
