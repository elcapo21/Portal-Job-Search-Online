package com.example.demo.controllers;


import com.example.demo.dto.JobSeekerDto;
import com.example.demo.service.JobSeekerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/jobseeker")
@CrossOrigin("*")
public class JobSeekerController {

    private final JobSeekerService jobSeekerService;

    @PostMapping
    public ResponseEntity<JobSeekerDto> createJobSeeker(@RequestBody JobSeekerDto jobSeekerDto) {
        JobSeekerDto createdJobSeeker = jobSeekerService.createJobSeeker(jobSeekerDto);
        return new ResponseEntity<>(createdJobSeeker, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobSeekerDto> getJobSeekerById(@PathVariable Long id) {
        JobSeekerDto jobSeeker = jobSeekerService.getJobSeekerById(id);
        return new ResponseEntity<>(jobSeeker, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<JobSeekerDto>> getAllJobSeekers() {
        List<JobSeekerDto> jobSeekers = jobSeekerService.getAllJobSeeker_details();
        return new ResponseEntity<>(jobSeekers, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobSeeker(@PathVariable Long id) {
        jobSeekerService.deleteJobSeeker(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
