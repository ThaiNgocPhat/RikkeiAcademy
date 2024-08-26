package com.example.ProjectJavaModule4.repository;

import com.example.ProjectJavaModule4.entities.RoomEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomEntityRepository extends JpaRepository<RoomEntity, Integer> {
}
