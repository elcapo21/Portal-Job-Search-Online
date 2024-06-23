import React, {useEffect, useState} from 'react'
import { JobList, deleteJob } from '../services/JobService'
import { useNavigate } from 'react-router-dom'

const JobListComponent = () => {

  const [job_details, setJob_details] = useState([])

  const navigator = useNavigate();

  useEffect(() => {
    getAllJob();

  },[])

  function getAllJob(){
    JobList().then((Response)=>{
      setJob_details(Response.data);
    }).catch(error => {
      console.error(error);
    })
  }
    
  function addNewJob() {
    navigator('/add-job')
  }

  function updateJob(id){
    navigator('/edit-job/5{id}')
  }

  function removeJob(id){
    console.log(id);

    deleteJob(id).then((response) => {

    }).catch(error =>{
      console.error(error);
    })
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
            <th>Actions</th>
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
                <td>
                  <button className='btn btn-info' onClick={() => updateJob(job.id)}>Update</button>
                  <button className='btn btn-danger' onClick={() => removeJob(job.id)}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default JobListComponent