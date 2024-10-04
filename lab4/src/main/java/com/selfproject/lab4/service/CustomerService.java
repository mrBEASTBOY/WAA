package com.selfproject.lab4.service;

import com.selfproject.lab4.entity.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> getCustomers();

    Customer getCustomer(long id);

    Customer addCustomer(Customer customer);

    void deleteCustomer(long id);
}
