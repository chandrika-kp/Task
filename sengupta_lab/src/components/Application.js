import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Application = () => {
    const searchParams = new URLSearchParams(useLocation().search);
    const title = searchParams.get('title');
    const [formData, setFormData] = useState({
        jobTitle: title,
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/applications', formData)
            .then((response) => {
                console.log('Application submitted successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error submitting application:', error);
            });
    };
    return (
        <>
            <div>Application for the Post {title}</div>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Chandu"
                            required
                        />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            placeholder="KP"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit Application
                </button>
                {/* Application loaded successfully */}
            </form >

            {/* <form className='p-4 m-4 px-10'>

                <div class="row">
                    <div class="col">
                        <label class="form-label">First Name</label>

                        <input type="text" class="form-control" placeholder="First name" />
                    </div>
                    <div class="col">
                        <label class="form-label">Last Name</label>

                        <input type="text" class="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Phone Number</label>
                    <input type="number" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label class="form-label">How many years of experience you have?</label>
                    <input type="number" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Your Work/Portfolio URL</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Current company name</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="row">
                    <div class="col">
                        <label class="form-label">Current CTC</label>

                        <input type="text" class="form-control" placeholder="Current CTC" />
                    </div>
                    <div class="col">
                        <label class="form-label">Expected CTC</label>

                        <input type="text" class="form-control" placeholder="Expected CTC" />
                    </div>
                </div>
                <label class="form-label">What do you prefer in job locations?</label>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        onsite
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Hybrid
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Remote
                    </label>
                </div>
                <label class="form-label">What do you prefer in job type?</label>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Full time
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Part time
                    </label>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Tell me Few words about your previous role and experiences you have?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
           */}


        </>
    )
}

export default Application

