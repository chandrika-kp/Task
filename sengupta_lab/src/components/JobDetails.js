import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const JobDetails = () => {
  const [eachJob, setEachJob] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/jobs/${id}`)
      .then((res) => {
        setEachJob(res.data);
      })
  }, [id]);

  console.log(eachJob)
  return (
    <>
      {/* {eachJob.map((key)=>{

    })} */}
      <div>
        <h1>Job Details</h1>
        <p>Title: {eachJob.title}</p>
        <p>Company: {eachJob.company}</p>
        <p>Location: {eachJob.location}</p>
        <p>About: {eachJob.about}</p>
        <NavLink to={`/apply?title=${eachJob.title}`}>
          <button>Apply Now</button>
        </NavLink>
      </div>
    </>
  )
}

export default JobDetails