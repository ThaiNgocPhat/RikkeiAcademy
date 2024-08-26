package com.example.ProjectJavaModule4.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "hotels")
public class HotelEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int hotelId;

    @Column(name = "hotel_name", nullable = false, length = 255)
    private String hotelName;

    @Column(name = "hotel_address", nullable = false, length = 255)
    private String hotelAddress;

    @Column(name = "hotel_email", nullable = false, unique = true, length = 255)
    private String hotelEmail;

    @Column(name = "hotel_phone_number", nullable = false, length = 20)
    private String hotelPhoneNumber;
}
