package com.example.demo.repository;

import com.example.demo.modeles.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {

}
