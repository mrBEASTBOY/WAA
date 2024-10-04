package com.selfproject.lab4.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("DVD")
public class DVD extends Product{
    private String genre;
}
