package com.selfproject.lab4.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "PATIENT")
@SecondaryTables(
        @SecondaryTable(name="ADDRESS", pkJoinColumns = {
                @PrimaryKeyJoinColumn(name = "PATIENT_ID", referencedColumnName = "id")
        })
)
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String name;

    @Column(table = "ADDRESS", name = "STREET")
    private String street;

    @Column(table = "ADDRESS", name = "ZIP")
    private String zip;

    @Column(table = "ADDRESS", name = "CITY")
    private String city;

}
