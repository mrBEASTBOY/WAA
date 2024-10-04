package com.selfproject.lab5.service;

import com.selfproject.lab5.entity.Book;

import java.util.List;

public interface BookService {
    public List<Book> getAllBooks();

    public Book getBookById(long id);

    public Book addBook(Book book);

    public Book updateBook(Book book);

    public void deleteBook(long id);
}
