package com.selfproject.lab4.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import lombok.Getter;
import lombok.Setter;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
//@Data
@Getter
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long orderId;

    @Column(name = "date")
    private LocalDate date;

    @ManyToOne
    @Setter
    @JsonIgnore
    private Customer customer;

    @OneToMany(cascade = CascadeType.ALL)
    private List<OrderLine> orderLines =  new ArrayList<>();
}
