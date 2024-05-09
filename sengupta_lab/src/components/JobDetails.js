import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const JobDetails = () => {
  const [eachJob, setEachJob] = useState([]);
  const { id } = useParams();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get(`http://localhost:8000/jobs/${id}`)
      .then((res) => {
        setEachJob(res.data);
      })
  }, [id]);

  console.log(eachJob)
  return (
    <>
      <h3 className="text-center font-bold text-2xl py-2 mt-2 bg-blue-200">Job Details</h3>

      <div className=' border-blue-300  bg-blue-200 text-center mx-4 my-2 p-2'>
        <div className="p-4 border rounded shadow-md text-left">
          {/* <h1 className="text-xl font-bold mb-4">Job Details</h1> */}
          <p><span className="font-bold">Title:</span> {eachJob.title}</p>
          <p><span className="font-bold">Company:</span> {eachJob.company}</p>
          <p><span className="font-bold">Package:</span> {eachJob.salary}</p>
          <p><span className="font-bold">Location:</span> {eachJob.location}</p>
          <p><span className="font-bold">About:</span> {eachJob.about}</p>
          <NavLink to={`/apply?title=${eachJob.title}`} className="inline-block mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Apply Now
            </button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default JobDetails