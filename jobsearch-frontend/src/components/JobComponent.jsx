import React, { useState } from 'react'
import { createJob } from '../services/JobService'
import { useNavigate } from 'react-router-dom'

const JobComponent = (job) => {

    
    const [companyName, setCompanyName]= useState('')
    const [companyURL, setCompanyUrl]= useState('')
    const [contactEmail, setContactEmail]= useState('')
    const [jobRole, setJobRole]= useState('')
    const [jobLocation, setJobLocation]= useState('')
    const [jobDescription, setJobDescription]= useState('')
    const [postDate, setPostDate]= useState('')
    const [closeDate, setCloseDate]= useState('')

    const navigator = useNavigate();

    function saveJob(e) {
      e.preventDefault();

      const job = {companyName, companyURL, contactEmail, jobRole,  jobLocation, jobDescription, postDate, closeDate}
      console.log(job)
      navigator('/job_details')
    }

    createJob(job).then((Response) => {
      console.log(Response.data);
      
    }).catch(error => {
      console.error(error);})

      
    
    


  return (
    <div className='container'>

      <div className='row'>
        <div className='card col-md-6 offset-md-3 0ffset-md-3'>
          <h2 className='text-center'>Add Job</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Company Name:</label>
                <input type='text' placeholder='Enter Company Name' name='companyName'
                value={companyName} className='form-control' onChange={(e) => setCompanyName(e.target.value)}>
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Company Url:</label>
                <input type='text' placeholder='Enter Company Url' name='companyUrl'
                value={companyURL} className='form-control' onChange={(e) => setCompanyUrl(e.target.value)}>
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Contact Email:</label>
                <input type='text' placeholder='Enter Contact Email of Company' name='contactEmail'
                value={contactEmail} className='form-control' onChange={(e) => setContactEmail(e.target.value)}>
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Job Role:</label>
                <input type='text' placeholder='Enter Job Role' name='jobRole'
                value={jobRole} className='form-control' onChange={(e) =>  setJobRole(e.target.value)}>
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Job Location:</label>
                <input type='text' placeholder='Enter Job Location' name='jobLocation'
                value={jobLocation} className='form-control' onChange={(e) => setJobLocation(e.target.value)}>
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Job Description:</label>
                <input type='text' placeholder='Enter Job Description' name='jobDescription'
                value={jobDescription} className='form-control' onChange={(e) => setJobDescription(e.target.value)}>
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Post Date:</label>
                <input type='text' placeholder='Enter Post Date of Job' name='postDate'
                value={postDate} className='form-control' onChange={(e) => setPostDate(e.target.value)}>
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Close Date</label>
                <input type='text' placeholder='Enter Close Date of Job' name='closeDate'
                value={closeDate} className='form-control' onChange={(e) =>  setCloseDate(e.target.value)}>
                </input>
              </div>

              <button className='btn btn-success' onClick={saveJob}>Submit</button>
            </form>

          </div>

        </div>
      </div>

    </div>
  )
}

export default JobComponent