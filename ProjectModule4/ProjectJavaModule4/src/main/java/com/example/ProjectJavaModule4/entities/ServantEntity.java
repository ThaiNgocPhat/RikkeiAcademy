package com.example.ProjectJavaModule4.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "servants")
public class ServantEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "servant_id")
    private int servantId;

    @Column(name = "servant_name", length = 255, nullable = false)
    private String servantName;

    @Column(name = "servant_phone_number", nullable = false)
    private String servantPhoneNumber;

    @Column(name = "servant_adhar", length = 20, unique = true, nullable = false)
    private String servantAdhar;

    @Column(name = "servant_age", nullable = false)
    private int servantAge;

    @Column(name = "servant_salary", nullable = false)
    private double servantSalary;

    @ManyToOne
    @JoinColumn(name = "hotel_id", nullable = false)
    private HotelEntity hotel;
}
