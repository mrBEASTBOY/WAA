package com.selfproject.lab3.entity;

import jakarta.persistence.*;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
//    @JoinTable(name = "pub_book",
//            joinColumns = @JoinColumn(name = "pub_id"),
//            inverseJoinColumns = @JoinColumn(name = "book_id")
//    )
    private Publisher publisher;

    @OneToOne
//    @PrimaryKeyJoinColumn
    private Author author;
}
