package com.selfproject.lab3.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Major {
    @Id
    @GeneratedValue
    private int id;
    private String majorName;

    @OneToOne(mappedBy = "major")
    private Student student;

}
