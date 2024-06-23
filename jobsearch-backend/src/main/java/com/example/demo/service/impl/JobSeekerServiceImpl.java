package com.example.demo.service.impl;

import com.example.demo.dto.JobSeekerDto;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.JobMapper;
import com.example.demo.mapper.JobSeekerMapper;
import com.example.demo.modeles.Job;
import com.example.demo.modeles.JobSeeker;
import com.example.demo.repository.JobSeekerRepository;
import com.example.demo.service.JobSeekerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class JobSeekerServiceImpl implements JobSeekerService {

    private JobSeekerRepository jobSeekerRepository;
    @Override
    public JobSeekerDto createJobSeeker(JobSeekerDto jobSeekerDto) {
        JobSeeker jobSeeker = JobSeekerMapper.mapToJobSeeker(jobSeekerDto);
        JobSeeker savedJobSeeker = jobSeekerRepository.save(jobSeeker);
        return JobSeekerMapper.mapToJobSeekerDto(savedJobSeeker);
    }

    @Override
    public JobSeekerDto getJobSeekerById(Long jobSeekerId) {
        JobSeeker jobSeeker = jobSeekerRepository.findById(jobSeekerId).orElseThrow(()->new ResourceNotFoundException("JobSeeker is not exist with given id :" + jobSeekerId));
        return JobSeekerMapper.mapToJobSeekerDto(jobSeeker);
    }

    @Override
    public List<JobSeekerDto> getAllJobSeeker_details() {
        List<JobSeeker> jobSeeker_details = jobSeekerRepository.findAll();
        return jobSeeker_details.stream().map((jobSeeker) ->JobSeekerMapper.mapToJobSeekerDto(jobSeeker)).collect(Collectors.toList());
    }

    @Override
    public void deleteJobSeeker(Long jobSeekerId) {
        JobSeeker jobSeeker = jobSeekerRepository.findById(jobSeekerId).orElseThrow(() -> new ResourceNotFoundException("JobSeeker is not exist with given id :" + jobSeekerId));

        jobSeekerRepository.deleteById(jobSeekerId);
    }
}
