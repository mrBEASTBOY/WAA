package com.selfproject.lab4.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "order_line")
public class OrderLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int quantity;

    @ManyToOne(cascade = CascadeType.ALL)
    private Product product;
}
