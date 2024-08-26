package com.example.ProjectJavaModule4.repository;

import com.example.ProjectJavaModule4.entities.HotelEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelEntityRepository extends JpaRepository<HotelEntity, Integer> {
}
