package com.example.ProjectJavaModule4.services;

import com.example.ProjectJavaModule4.entities.ReservationEntity;

import java.util.List;

public interface ReservationService {
    ReservationEntity createReservation(ReservationEntity reservation);
    ReservationEntity updateReservation(ReservationEntity reservation, int id);
    void deleteReservation(int id);
    List<ReservationEntity> getAllReservations();
    ReservationEntity getReservationById(int id);
}
