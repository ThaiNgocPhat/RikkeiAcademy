package com.example.ProjectJavaModule4.controllers;
import com.example.ProjectJavaModule4.entities.HotelEntity;
import com.example.ProjectJavaModule4.services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hotels")
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @PostMapping
    public ResponseEntity<HotelEntity> createHotel(@RequestBody HotelEntity hotel) {
        return ResponseEntity.ok(hotelService.createHotel(hotel));
    }

    @PutMapping("/{id}")
    public ResponseEntity<HotelEntity> updateHotel(@PathVariable int id, @RequestBody HotelEntity hotel) {
        return ResponseEntity.ok(hotelService.updateHotel(hotel, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHotel(@PathVariable int id) {
        hotelService.deleteHotel(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<HotelEntity>> getAllHotels() {
        return ResponseEntity.ok(hotelService.getAllHotels());
    }

    @GetMapping("/{id}")
    public ResponseEntity<HotelEntity> getHotelById(@PathVariable int id) {
        return ResponseEntity.ok(hotelService.getHotelById(id));
    }
}
