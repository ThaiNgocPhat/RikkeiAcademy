package com.example.ProjectJavaModule4.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "facilities")
public class FacilitiesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int facilityId;

    @Column(name = "facility_name", nullable = false, length = 255)
    private String facilityName;

    @Column(name = "facility_cost", nullable = false)
    private double facilityCost;
}
