package com.selfproject.lab5.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "publisher")
public class Publisher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Address address;
}
