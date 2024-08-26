package com.example.ProjectJavaModule4.services;
import com.example.ProjectJavaModule4.entities.CustomerEntity;

import java.util.List;

public interface CustomerService {
    CustomerEntity createCustomer(CustomerEntity customer);
    CustomerEntity updateCustomer(CustomerEntity customer, int id);
    void deleteCustomer(int id);
    List<CustomerEntity> getAllCustomers();
    CustomerEntity getCustomerById(int id);
}
