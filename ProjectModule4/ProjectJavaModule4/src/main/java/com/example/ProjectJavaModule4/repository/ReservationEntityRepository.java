package com.example.ProjectJavaModule4.repository;

import com.example.ProjectJavaModule4.entities.ReservationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationEntityRepository extends JpaRepository<ReservationEntity, Integer> {
}
