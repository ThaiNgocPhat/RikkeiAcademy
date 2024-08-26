package com.example.ProjectJavaModule4.controllers;
import com.example.ProjectJavaModule4.entities.ReservationEntity;
import com.example.ProjectJavaModule4.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping
    public ResponseEntity<ReservationEntity> createReservation(@RequestBody ReservationEntity reservation) {
        return ResponseEntity.ok(reservationService.createReservation(reservation));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReservationEntity> updateReservation(@PathVariable int id, @RequestBody ReservationEntity reservation) {
        return ResponseEntity.ok(reservationService.updateReservation(reservation, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReservation(@PathVariable int id) {
        reservationService.deleteReservation(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<ReservationEntity>> getAllReservations() {
        return ResponseEntity.ok(reservationService.getAllReservations());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReservationEntity> getReservationById(@PathVariable int id) {
        return ResponseEntity.ok(reservationService.getReservationById(id));
    }
}
