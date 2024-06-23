import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8081/api/job_details';

export const JobList = () => axios.get(REST_API_BASE_URL);

export const createJob = (job) => axios.post(REST_API_BASE_URL, job);

export const getJob = (jobId) => axios.get(`${REST_API_BASE_URL}/${jobId}`);

export const deleteJob = (jobId) => axios.delete(`${REST_API_BASE_URL}/${jobId}`);
