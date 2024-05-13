package com.example.demo.controllers;

import com.example.demo.dto.JobDto;
import com.example.demo.modeles.Job;
import com.example.demo.service.JobService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/job_details")
public class JobController {

    private JobService jobService;

    // Build Add Job REST API
    @PostMapping
    public ResponseEntity<JobDto> createJob(@RequestBody JobDto jobDto){
        // Validation du contactEmail
        if (jobDto.getContactEmail() == null || jobDto.getContactEmail().isEmpty()) {
            throw new IllegalArgumentException("Contact Email is obligatory");
        }

        // Mapper l'objet JobDTO à l'entité Emploi
        Job job = new Job();
        job.setContactEmail(jobDto.getContactEmail());

        JobDto savedJob = jobService.createJob(jobDto);
        return  new ResponseEntity<>(savedJob, HttpStatus.CREATED);
    }

    //Build get Job REST API
    @GetMapping("{id}")
    public ResponseEntity<JobDto> getJobById(@PathVariable("id") Long jobId){
        JobDto jobDto = jobService.getJobById(jobId);
        return ResponseEntity.ok(jobDto);
    }

    //Build Get All Job REST API
    @GetMapping
    public ResponseEntity<List<JobDto>> getAllJob_details(){
        List<JobDto> job_details = jobService.getAllJob_details();
        return ResponseEntity.ok(job_details);

    }

    //Build Update Job REST API
    @PutMapping("{id}")
    public ResponseEntity<JobDto> updateJob(@Validated @PathVariable("id") @RequestBody Long jobId, JobDto updatedJob){
        JobDto jobDto = jobService.updateJob(jobId, updatedJob);
        return  ResponseEntity.ok(jobDto);
    }

    //Build Delete Job REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteJob(@PathVariable("id") Long jobId){
        jobService.deleteJob(jobId);
        return ResponseEntity.ok("Job deleted successfully!");
    }

}

