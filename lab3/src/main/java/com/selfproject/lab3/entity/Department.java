package com.selfproject.lab3.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "department")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "department_name")
    private String departmentName;

    @OneToMany(mappedBy = "department")
//    @JoinTable(name = "department_employee",
//    joinColumns = @JoinColumn(name = "my_department_id"),
//    inverseJoinColumns = @JoinColumn(name = "my_employee_id"))
    private List<Employee> employees = new ArrayList<>();
}
