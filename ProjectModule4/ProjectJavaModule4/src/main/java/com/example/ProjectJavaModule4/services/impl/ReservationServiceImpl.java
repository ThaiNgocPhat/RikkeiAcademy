package com.example.ProjectJavaModule4.services.impl;
import com.example.ProjectJavaModule4.entities.ReservationEntity;
import com.example.ProjectJavaModule4.repository.ReservationEntityRepository;
import com.example.ProjectJavaModule4.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationEntityRepository reservationEntityRepository;

    @Override
    public ReservationEntity createReservation(ReservationEntity reservation) {
        return reservationEntityRepository.save(reservation);
    }

    @Override
    public ReservationEntity updateReservation(ReservationEntity reservation, int id) {
        if (reservationEntityRepository.existsById(id)) {
            reservation.setReservationId(id);
            return reservationEntityRepository.save(reservation);
        }
        return null;
    }

    @Override
    public void deleteReservation(int id) {
        reservationEntityRepository.deleteById(id);
    }

    @Override
    public List<ReservationEntity> getAllReservations() {
        return reservationEntityRepository.findAll();
    }

    @Override
    public ReservationEntity getReservationById(int id) {
        return reservationEntityRepository.findById(id).orElse(null);
    }
}
