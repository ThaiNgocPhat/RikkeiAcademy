package com.example.ProjectJavaModule4.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "admins")
public class AdminEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "admin_id")
    private int adminId;

    @Column(name = "admin_name", nullable = false, length = 255)
    private String adminName;

    @Column(name = "admin_email", nullable = false, unique = true, length = 255)
    private String adminEmail;

    @Column(name = "admin_password", nullable = false, length = 255)
    private String adminPassword;

    @ManyToOne
    @JoinColumn(name = "hotel_id", nullable = false)
    private HotelEntity hotel;
}
