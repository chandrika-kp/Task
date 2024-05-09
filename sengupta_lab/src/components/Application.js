import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Application = () => {
    const searchParams = new URLSearchParams(useLocation().search);
    const title = searchParams.get('title');
    const [formData, setFormData] = useState({
        jobTitle: title,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        experience: '',
        portfolioURL: '',
        currentCompanyName: '',
        currentCTC: '',
        expectedCTC: '',
        jobLocation: [],
        jobType: [],
        previousExperiences: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked ? [...formData[name], value] : formData[name].filter(item => item !== value) : value
        }));
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/applications', formData)
            .then((response) => {
                console.log('Application submitted successfully:', response.data);
                navigate('/');
            })
            .catch((error) => {
                console.error('Error submitting application:', error);
            });
    };

    return (
        <>
            <div className='flex justify-center items-center'>

                <form className="w-full max-w-lg p-4 m-4 px-10 border-red-200 border-2" onSubmit={handleSubmit}>
                    <div className="text-xl py-4 ">Application for the <span className="text-xl font-bold ">{title}</span> Post</div>
                    {/* First Name and Last Name */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Chandu"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                placeholder="KP"
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="mb-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Phone Number
                        </label>
                        <input className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* How many years of experience you have? */}
                    <div className="mb-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            How many years of experience you have?
                        </label>
                        <input className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="number"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Your Work/Portfolio URL */}
                    <div className="mb-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Your Work/Portfolio URL
                        </label>
                        <input className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            name="portfolioURL"
                            value={formData.portfolioURL}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Current company name */}
                    <div className="mb-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Current company name
                        </label>
                        <input className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            name="currentCompanyName"
                            value={formData.currentCompanyName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Current CTC and Expected CTC */}
                    <div className="row mb-3">
                        <div className="col">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Current CTC
                            </label>
                            <input className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                name="currentCTC"
                                value={formData.currentCTC}
                                onChange={handleChange}
                                placeholder="Current CTC(LPA)"
                            />
                        </div>
                        <div className="col">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Expected CTC
                            </label>
                            <input className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                name="expectedCTC"
                                value={formData.expectedCTC}
                                onChange={handleChange}
                                placeholder="Expected CTC(LPA)"
                            />
                        </div>
                    </div>

                    {/* Job Location */}
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        What do you prefer in job locations?
                    </label>
                    <div className="form-check mb-3">
                        <input className="form-check-input accent-blue-200"
                            type="checkbox"
                            name="jobLocation"
                            value="onsite"
                            onChange={handleChange}
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label px-2" htmlFor="flexCheckDefault">
                            Onsite
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input accent-blue-200"
                            type="checkbox"
                            name="jobLocation"
                            value="hybrid"
                            onChange={handleChange}
                            id="flexCheckChecked"
                        />
                        <label className="form-check-label px-2" htmlFor="flexCheckChecked">
                            Hybrid
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input accent-blue-200"
                            type="checkbox"
                            name="jobLocation"
                            value="remote"
                            onChange={handleChange}
                            id="flexCheckChecked"
                        />
                        <label className="form-check-label px-2" htmlFor="flexCheckChecked">
                            Remote
                        </label>
                    </div>

                    {/* Job Type */}
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        What do you prefer in job type?
                    </label>
                    <div className="form-check mb-3">
                        <input className="form-check-input accent-blue-200"
                            type="checkbox"
                            name="jobType"
                            value="fullTime"
                            onChange={handleChange}
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label px-2" htmlFor="flexCheckDefault">
                            Full time
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input accent-blue-200"
                            type="checkbox"
                            name="jobType"
                            value="partTime"
                            onChange={handleChange}
                            id="flexCheckChecked"
                        />
                        <label className="form-check-label px-2" htmlFor="flexCheckChecked">
                            Part time
                        </label>
                    </div>

                    {/* Previous Experiences */}
                    <div className="mb-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Tell me Few words about your previous role and experiences you have?
                        </label>
                        <textarea className="form-control bg-blue-200 resize-x rounded-md"
                            name="previousExperiences"
                            value={formData.previousExperiences}
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => alert('Cannot edit later.Are you sure to Submit?')}>
                        Submit
                    </button>
                </form>
            </div>

        </>
    );
}

export default Application;

