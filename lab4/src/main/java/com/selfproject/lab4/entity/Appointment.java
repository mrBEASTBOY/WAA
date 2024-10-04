package com.selfproject.lab4.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "APPOINTMENT")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "APPDATE")
    private String appdate;

    @ManyToOne
    @JoinColumn(name = "PATIENT")
    private Patient patient;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name="paydate", column = @Column(name = "PAYDATE")),
            @AttributeOverride(name="amount", column = @Column(name = "AMOUNT"))
    })
    private Payment payment;

    @ManyToOne
    @JoinColumn(name = "DOCTOR")
    private Doctor doctor;

}
