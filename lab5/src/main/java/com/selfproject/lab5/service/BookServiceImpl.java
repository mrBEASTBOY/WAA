package com.selfproject.lab5.service;

import com.selfproject.lab5.entity.Book;
import com.selfproject.lab5.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    BookRepository bookRepository;

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBookById(long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);

        return optionalBook.orElse(null);
    }

    @Override
    public Book addBook(Book book) {
        bookRepository.save(book);
        return book;
    }

    @Override
    public Book updateBook(Book book) {
        bookRepository.save(book);
        return book;
    }

    @Override
    public void deleteBook(long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        optionalBook.ifPresent(book -> bookRepository.delete(book));
    }
}
