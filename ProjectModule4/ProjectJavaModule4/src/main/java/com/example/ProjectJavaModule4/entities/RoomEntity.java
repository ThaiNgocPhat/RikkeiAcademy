package com.example.ProjectJavaModule4.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "rooms")
public class RoomEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int roomId;

    @Column(name = "images", length = 255)
    private String images;

    @ManyToOne
    @JoinColumn(name = "type_id", nullable = false)
    private RoomTypeEntity roomType;

    @ManyToOne
    @JoinColumn(name = "facility_id")
    private FacilitiesEntity facility;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private RoomStatusEntity status;

    @ManyToOne
    @JoinColumn(name = "hotel_id", nullable = false)
    private HotelEntity hotel;
}
