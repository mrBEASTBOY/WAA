package com.selfproject.lab4.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Book")
public class Book extends Product {
    private String title;
}
