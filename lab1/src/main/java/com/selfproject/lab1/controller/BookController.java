package com.selfproject.lab1.controller;

import com.selfproject.lab1.entity.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @GetMapping
    public List<Book> getAllBooks() {
        return List.of(
                new Book(1, "Java", "123", "Linh"),
                new Book(2, "Python", "234", "Tony"),
                new Book(3, "React", "345", "John")
        );
    }
}
