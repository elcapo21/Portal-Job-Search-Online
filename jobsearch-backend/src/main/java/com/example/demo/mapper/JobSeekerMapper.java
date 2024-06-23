package com.example.demo.mapper;

import com.example.demo.dto.JobDto;
import com.example.demo.dto.JobSeekerDto;
import com.example.demo.modeles.Job;
import com.example.demo.modeles.JobSeeker;

public class JobSeekerMapper {
    public static JobSeekerDto mapToJobSeekerDto(JobSeeker jobSeeker) {
        return new JobSeekerDto(
                jobSeeker.getId(),
                jobSeeker.getJobseekerName(),
                jobSeeker.getEmail(),
                jobSeeker.getPhone(),
                jobSeeker.getCountryName(),
                jobSeeker.getCurriculumVitae(),
                jobSeeker.getCoverLetter(),
                jobSeeker.getGithubURL(),
                jobSeeker.getLinkeInURL()
        );
    }

    public static JobSeeker mapToJobSeeker(JobSeekerDto jobSeekerDto) {
        return new JobSeeker(
                jobSeekerDto.getId(),
                jobSeekerDto.getJobseeker_name(),
                jobSeekerDto.getEmail(),
                jobSeekerDto.getPhone(),
                jobSeekerDto.getCountry_name(),
                jobSeekerDto.getCv_url(),
                jobSeekerDto.getCover_letter(),
                jobSeekerDto.getGithub_url(),
                jobSeekerDto.getLinkeIn_url()

        );
    }

}
