package com.selfproject.lab5.service;

import com.selfproject.lab5.entity.Publisher;

import java.util.List;

public interface PublisherService {
    public List<Publisher> getAllPublisher();
    public Publisher addPublisher(Publisher publisher);
    public Publisher updatePublisher(Publisher publisher);
    public void deletePublisher(Long id);
}
