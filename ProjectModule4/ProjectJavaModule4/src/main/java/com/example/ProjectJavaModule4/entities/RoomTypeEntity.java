package com.example.ProjectJavaModule4.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "room_types")
public class RoomTypeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "type_id")
    private int typeId;

    @Column(name = "type_name", length = 255, nullable = false)
    private String typeName;

    @Column(name = "cost", nullable = false)
    private double cost;
}
