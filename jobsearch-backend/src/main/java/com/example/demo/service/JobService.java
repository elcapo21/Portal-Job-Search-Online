package com.example.demo.service;


import com.example.demo.dto.JobDto;

import java.util.List;

public interface JobService {
    JobDto createJob(JobDto jobDto);

    JobDto getJobById(Long jobId);

    List<JobDto> getAllJob_details();

    JobDto updateJob(Long jobId, JobDto updatedJob);

    void deleteJob(Long jobId);
}
