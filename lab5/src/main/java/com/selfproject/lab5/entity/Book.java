package com.selfproject.lab5.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String isbn;

    private double price;

    @ManyToOne(cascade = CascadeType.ALL)
    private Publisher publisher;
}
