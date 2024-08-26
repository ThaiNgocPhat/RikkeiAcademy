package com.example.ProjectJavaModule4.controllers;
import com.example.ProjectJavaModule4.entities.FacilitiesEntity;
import com.example.ProjectJavaModule4.services.FacilitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/facilities")
public class FacilitiesController {

    @Autowired
    private FacilitiesService facilitiesService;

    @PostMapping
    public ResponseEntity<FacilitiesEntity> createFacility(@RequestBody FacilitiesEntity facility) {
        return ResponseEntity.ok(facilitiesService.createFacility(facility));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FacilitiesEntity> updateFacility(@PathVariable int id, @RequestBody FacilitiesEntity facility) {
        return ResponseEntity.ok(facilitiesService.updateFacility(facility, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFacility(@PathVariable int id) {
        facilitiesService.deleteFacility(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<FacilitiesEntity>> getAllFacilities() {
        return ResponseEntity.ok(facilitiesService.getAllFacilities());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FacilitiesEntity> getFacilityById(@PathVariable int id) {
        return ResponseEntity.ok(facilitiesService.getFacilityById(id));
    }
}
