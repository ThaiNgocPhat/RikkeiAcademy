package com.example.ProjectJavaModule4.services.impl;

import com.example.ProjectJavaModule4.entities.CustomerEntity;
import com.example.ProjectJavaModule4.repository.OurUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class OurUserDetailsService implements UserDetailsService {

    @Autowired
    private OurUserRepo ourUserRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        CustomerEntity customerEntity = ourUserRepo.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + username));

        return User.builder()
                .username(customerEntity.getCustomerEmail())
                .password(customerEntity.getPassword())
                .roles(customerEntity.getRole())
                .build();
    }
}
