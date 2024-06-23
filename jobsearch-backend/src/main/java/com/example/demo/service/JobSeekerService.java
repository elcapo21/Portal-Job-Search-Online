package com.example.demo.service;

import com.example.demo.dto.JobDto;
import com.example.demo.dto.JobSeekerDto;

import java.util.List;

public interface JobSeekerService {

    //JobSeekerDto createJobSeeker(JobSeekerDto jobSeekerDto);
    JobSeekerDto createJobSeeker(JobSeekerDto jobSeekerDto);

    JobSeekerDto getJobSeekerById(Long jobSeekerId);

    List<JobSeekerDto> getAllJobSeeker_details();

    void deleteJobSeeker(Long jobSeekerId);
}
