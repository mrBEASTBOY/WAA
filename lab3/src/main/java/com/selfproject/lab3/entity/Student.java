package com.selfproject.lab3.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @ManyToMany(mappedBy = "participateStudents")
//    @JoinTable(name = "course_studentsssssssss",
//            joinColumns = {@JoinColumn(name = "course_id")},
//            inverseJoinColumns = {@JoinColumn(name = "student_id")})
    private List<Course> courses = new ArrayList<>();

    @OneToOne
    private Major major;
}
