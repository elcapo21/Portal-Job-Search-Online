package com.example.demo.mapper;

import com.example.demo.dto.JobDto;
import com.example.demo.modeles.Job;

public class JobMapper {

    public static JobDto mapToJobDto(Job job){
        return  new JobDto(
                job.getId(),
                job.getCompanyName(),
                job.getCompanyURL(),
                job.getContactEmail(),
                job.getJobRole(),
                job.getJobLocation(),
                job.getJobDescription(),
                job.getPostDate(),
                job.getCloseDate()
        );
    }

    public static Job mapToJob(JobDto jobDto){
        return new Job(
                jobDto.getId(),
                jobDto.getCompanyName(),
                jobDto.getCompanyURL(),
                jobDto.getContactEmail(),
                jobDto.getJobRole(),
                jobDto.getJobLocation(),
                jobDto.getJobDescription(),
                jobDto.getPostDate(),
                jobDto.getCloseDate()
        );
    }
}
