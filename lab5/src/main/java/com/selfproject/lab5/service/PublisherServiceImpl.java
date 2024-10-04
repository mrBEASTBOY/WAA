package com.selfproject.lab5.service;

import com.selfproject.lab5.entity.Publisher;
import com.selfproject.lab5.repository.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublisherServiceImpl implements PublisherService {
    @Autowired
    private PublisherRepository publisherRepository;

    @Override
    public List<Publisher> getAllPublisher() {
        return publisherRepository.findAll();
    }

    @Override
    public Publisher addPublisher(Publisher publisher) {
        publisherRepository.save(publisher);
        return publisher;
    }

    @Override
    public Publisher updatePublisher(Publisher publisher) {
        publisherRepository.save(publisher);
        return publisher;
    }

    @Override
    public void deletePublisher(Long id) {
        publisherRepository.deleteById(id);
    }
}
