package com.example.demo.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@NonNull
public class JobSeekerDto {
    private Long id;
    private String jobseeker_name;
    private String email;
    private Long phone;
    private String country_name;
    private String cv_url;
    private String cover_letter;
    private String github_url;
    private String linkeIn_url;

}
