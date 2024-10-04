package com.selfproject.lab4.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("CD")
public class CD extends Product {
    private String artist;
}
