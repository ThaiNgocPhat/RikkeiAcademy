package com.example.ProjectJavaModule4.services.impl;
import com.example.ProjectJavaModule4.entities.CustomerEntity;
import com.example.ProjectJavaModule4.repository.CustomerEntityRepository;
import com.example.ProjectJavaModule4.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerEntityRepository customerEntityRepository;

    @Override
    public CustomerEntity createCustomer(CustomerEntity customer) {
        return customerEntityRepository.save(customer);
    }

    @Override
    public CustomerEntity updateCustomer(CustomerEntity customer, int id) {
        if (customerEntityRepository.existsById(id)) {
            customer.setCustomerId(id);
            return customerEntityRepository.save(customer);
        }
        return null;
    }

    @Override
    public void deleteCustomer(int id) {
        customerEntityRepository.deleteById(id);
    }

    @Override
    public List<CustomerEntity> getAllCustomers() {
        return customerEntityRepository.findAll();
    }

    @Override
    public CustomerEntity getCustomerById(int id) {
        return customerEntityRepository.findById(id).orElse(null);
    }
}
