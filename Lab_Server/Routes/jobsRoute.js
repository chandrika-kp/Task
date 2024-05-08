const express = require('express');
const jobsModel = require('../Models/JobsModel');

const router = express.Router();

// Route to fetch all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await jobsModel.find();
        console.log('Number of jobs:', jobs.length); 
        // console.log('Jobs:', jobs); 
        res.json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Route to fetch a selected job by its ID
router.get('/:id',async(req,res) => {
    try{
        const id = req.params.id;
        const eachJob = await jobsModel.findOne({ _id: id });
        res.json(eachJob)
        console.log(eachJob)
    }catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// router.post('/', async (req, res) => {
//     const { title, company, location, about, responsibility, openings, salary, experience, type } = req.body
//     try{
//         const job = await Job.create({ title, company, location, about, responsibility, openings, salary, experience, type })
//         res.status(200).json(job)
//     }
//     catch(error){
//         console.error(err);
//         res.status(400).send({error: error.message})
//     }
//     res.json({ mssg: "post a job" })
// })
module.exports = router;