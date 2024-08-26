package com.example.ProjectJavaModule4.repository;

import com.example.ProjectJavaModule4.entities.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OurUserRepo extends JpaRepository<CustomerEntity, Integer> {
    Optional<CustomerEntity> findByEmail(String email);
}
