package com.example.demo.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@NonNull
public class JobDto {

    private long id ;
    private String companyName;
    private String companyURL;
    private String contactEmail;
    private String jobRole;
    private String jobLocation;
    private String jobDescription;
    private String postDate;
    private String closeDate;
}
