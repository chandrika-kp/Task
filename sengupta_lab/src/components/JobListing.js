import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchJobs } from '../Redux/Actions/action';
import axios from 'axios';

const JobListing = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobsList);
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedType, setSelectedType] = useState('');

    axios.defaults.withCredentials = true;

    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    const jobTitles = [...new Set(jobs.map((job) => job.title))].sort();
    console.log(jobTitles)

    const jobLocation = [...new Set(jobs.map((job) => job.location))].sort();
    console.log(jobLocation)

    const jobType = [...new Set(jobs.map((job) => job.type))].sort();
    console.log(jobType)

    const filteredJobs = jobs.filter((job) =>
        (selectedTitle ? job.title === selectedTitle : true) &&
        (selectedLocation ? job.location === selectedLocation : true) &&
        (selectedType ? job.type === selectedType : true) 

    );

    return (
        <>
            <h3 className="text-center font-bold text-2xl py-2 mt-2 bg-blue-200">Current Job Opportunities</h3>
            <div className="flex flex-col md:flex-row items-center p-2 m-2">
                <div className="sideBlock md:w-1/4 md:mr-8 mb-8 md:mb-0 bg-blue-200">
                    <h3 className="text-center font-bold text-2xl">Filter</h3>
                    <p className='py-3 my-2'>Select Job Role:</p>
                    <select className="w-full md:w-85" onChange={e => setSelectedTitle(e.target.value)}>
                        <option value="">All</option>
                        {jobTitles.map((title) => (
                            <option key={title} value={title}>{title}</option>
                        ))}
                    </select>

                    <p className='py-3 my-2'>Select Location:</p>
                    <select className="w-full md:w-85" onChange={e => setSelectedLocation(e.target.value)}>
                        <option value="">All</option>
                        {jobLocation.map((location) => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                    <p className='py-3 my-2'>Select Type:</p>
                    <select className="w-full md:w-85" onChange={e => setSelectedType(e.target.value)}>
                        <option value="">All</option>
                        {jobType.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <p className='py-3 my-2'>Can filter jobs according to your requirement</p>
                </div>

                <div className="jobCardBlock md:w-3/4">
                    <h1 className="text-center font-bold text-2xl">Job Openings</h1>
                    {
                        filteredJobs.length === 0
                            ? <p className="NoMatch text-center text-red-500 my-4">No jobs found</p>
                            : (
                                filteredJobs.map((job) => (
                                    <div key={job._id} className="eachJob bg-blue-200 p-8 mb-4 shadow-md rounded-lg">
                                        <h3 className="jobTitle text-black font-semibold text-xl">{job.title}</h3>
                                        <p>{job.company}</p>
                                        <p>{job.about}</p>
                                        <p>Package: {job.salary}</p>
                                        <p>No of openings: {job.openings}</p>
                                        <p>Location: {job.location}</p>
                                        <NavLink to={`/jobList/${job._id}`}>
                                            <button className="btn py-2 px-4 rounded mt-2">View Details</button>
                                        </NavLink>
                                    </div>
                                ))
                            )
                    }
                    <NavLink className="nav-link active text-end text-lg" type="button" onClick={() => alert('Please Login')} to="/joblist">+ more jobs</NavLink>
                </div>
            </div>
        </>

    )
}

export default JobListing