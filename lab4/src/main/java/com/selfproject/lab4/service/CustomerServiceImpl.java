package com.selfproject.lab4.service;

import com.selfproject.lab4.entity.Customer;
import com.selfproject.lab4.entity.Order;
import com.selfproject.lab4.repository.CustomerRepository;
//import com.selfproject.lab4.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

//    @Autowired
//    private OrderRepository orderRepository;

    @Override
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomer(long id) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        return optionalCustomer.orElse(null);
    }

    @Override
    public Customer addCustomer(Customer customer) {
        if(customer.getOrders() != null) {
            customer.getOrders().forEach(order -> {order.setCustomer(customer);});
        }
        customerRepository.save(customer);
//        if(customer.getOrders() != null) {
//            for(Order order : customer.getOrders()) {
//                order.setCustomer(customer);
//                orderRepository.save(order);
//            }
//        }

        return customer;
    }

    @Override
    public void deleteCustomer(long id) {
        customerRepository.deleteById(id);
    }
}
