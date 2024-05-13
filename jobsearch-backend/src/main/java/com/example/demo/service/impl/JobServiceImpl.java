package com.example.demo.service.impl;

import com.example.demo.dto.JobDto;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.JobMapper;
import com.example.demo.modeles.Job;
import com.example.demo.repository.JobRepository;
import com.example.demo.service.JobService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class JobServiceImpl implements JobService {

    private JobRepository jobRepository;

    @Override
    public JobDto createJob(JobDto jobDto) {

        Job job = JobMapper.mapToJob(jobDto);
        Job savedJob = jobRepository.save(job);
        return JobMapper.mapToJobDto(savedJob);
    }

    @Override
    public JobDto getJobById(Long jobId) {
       Job job = jobRepository.findById(jobId).orElseThrow(()->new ResourceNotFoundException("Job is not exist with given id :" + jobId));
        return JobMapper.mapToJobDto(job);
    }

    @Override
    public List<JobDto> getAllJob_details() {
        List<Job> job_details = jobRepository.findAll();
        return job_details.stream().map((job) ->JobMapper.mapToJobDto(job)).collect(Collectors.toList());
    }

    @Override
    public JobDto updateJob(Long jobId, JobDto updatedJob) {

       Job job = jobRepository.findById(jobId).orElseThrow(() -> new ResourceNotFoundException("Job is not exist with given id :" + jobId));

       job.setId(updatedJob.getId());
       job.setCompanyName(updatedJob.getCompanyName());
       job.setCompanyURL(updatedJob.getCompanyURL());
       job.setContactEmail(updatedJob.getContactEmail());
       job.setJobRole(updatedJob.getJobRole());
       job.setJobLocation(updatedJob.getJobRole());
       job.setJobDescription(updatedJob.getJobDescription());
       job.setPostDate(updatedJob.getPostDate());
       job.setCloseDate(updatedJob.getCloseDate());

       Job updatedJobObj = jobRepository.save(job);
       System.out.println(job);
        return JobMapper.mapToJobDto(updatedJobObj);
    }

    @Override
    public void deleteJob(Long jobId) {

        Job job = jobRepository.findById(jobId).orElseThrow(() -> new ResourceNotFoundException("Job is not exist with given id :" + jobId));

        jobRepository.deleteById(jobId);
    }

}
