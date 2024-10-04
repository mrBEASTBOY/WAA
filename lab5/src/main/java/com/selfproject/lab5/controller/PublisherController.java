package com.selfproject.lab5.controller;

import com.selfproject.lab5.entity.Publisher;
import com.selfproject.lab5.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/publishers")
public class PublisherController {
    PublisherService publisherService;

    @Autowired
    public PublisherController(PublisherService publisherService) {
        this.publisherService = publisherService;
    }

    @GetMapping
    public List<Publisher> getAllPublishers() {
        return publisherService.getAllPublisher();
    }

    @PostMapping
    public Publisher createPublisher(@RequestBody Publisher publisher) {
        return publisherService.addPublisher(publisher);
    }

    @PutMapping
    public Publisher updatePublisher(@RequestBody Publisher publisher) {
        return publisherService.updatePublisher(publisher);
    }

    @DeleteMapping("/{id}")
    public void deletePublisher(@PathVariable long id) {
        publisherService.deletePublisher(id);
    }
}
