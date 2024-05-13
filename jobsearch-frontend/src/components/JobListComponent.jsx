import React, {useEffect, useState} from 'react'
import { JobList } from '../services/JobService'
import { useNavigate } from 'react-router-dom'

const JobListComponent = () => {

  const [job_details, setJob_details] = useState([])

  const navigator = useNavigate();

  useEffect(() => {
    JobList().then((Response)=>{
      setJob_details(Response.data);
    }).catch(error => {
      console.error(error);
    })

  },[])
    
  function addNewJob() {
    navigator('/add-job')
  }

  return (
    <div className='container'>
      <h2 className='text-center'> List of Jobs</h2>
      <button className='btn btn-primary mb-2' onClick={addNewJob}>Add Job</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            
            <th>company name</th>
            <th>company url</th>
            <th>contact email</th>
            <th>job role</th>
            <th>job location</th>
            <th>job description</th>
            <th>post date</th>
            <th>close date</th>
          </tr>
        </thead>
        <tbody>
          {
            job_details.map(job=>
              <tr key={job.id}>
                
                <td>{job.companyName}</td>
                <td>{job.companyURL}</td>
                <td>{job.contactEmail}</td>
                <td>{job.jobRole}</td>
                <td>{job.jobLocation}</td>
                <td>{job.jobDescription}</td>
                <td>{job.postDate}</td>
                <td>{job.closeDate}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default JobListComponent