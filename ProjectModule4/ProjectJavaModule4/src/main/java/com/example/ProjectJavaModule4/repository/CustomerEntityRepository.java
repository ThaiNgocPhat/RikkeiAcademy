package com.example.ProjectJavaModule4.repository;
import com.example.ProjectJavaModule4.entities.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerEntityRepository extends JpaRepository<CustomerEntity, Integer> {
}
