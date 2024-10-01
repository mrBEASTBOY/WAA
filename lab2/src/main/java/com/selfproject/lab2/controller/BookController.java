package com.selfproject.lab2.controller;

import com.selfproject.lab2.entity.Book;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/books")
public class BookController {
    private static int id = 3;
    private List<Book> books = new ArrayList<>(Arrays.asList(
            new Book(1, "Python", "Linh", "123"),
            new Book(2, "Java", "Tony", "234"),
            new Book(3, "Angular", "John", "345")
    ));


    @GetMapping
    public List<Book> getAllBooks() {
        return books;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable int id) {
        Optional<Book> book = books.stream().filter(b -> b.getId() == id).findFirst();
        return book.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        book.setId(++id);
        books.add(book);
        return ResponseEntity.ok().body(book);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable int id, @RequestBody Book book) {
        Optional<Book> existingBook = books.stream().filter(b -> b.getId() == id).findFirst();
        if(existingBook.isPresent()) {
            Book updatedBook = existingBook.get();
            updatedBook.setTitle(book.getTitle());
            updatedBook.setAuthor(book.getAuthor());
            updatedBook.setIsbn(book.getIsbn());
            return ResponseEntity.ok().body(updatedBook);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable int id) {
        Optional<Book> book = books.stream().filter(b -> b.getId() == id).findFirst();
        if(book.isPresent()) {
            books.remove(book.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
