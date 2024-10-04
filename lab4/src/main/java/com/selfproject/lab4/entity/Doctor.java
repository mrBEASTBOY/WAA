package com.selfproject.lab4.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="DOCTOR")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TYPE")
    private String doctortype;

    @Column(name = "FIRSTNAME")
    private String firstname;

    @Column(name = "LASTNAME")
    private String lastname;
}
