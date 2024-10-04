package com.selfproject.lab4.entity;

import jakarta.persistence.Embeddable;

@Embeddable
public class Payment {
    private String paydate;
    private double amount;
}
