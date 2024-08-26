package com.example.ProjectJavaModule4.controllers;
import com.example.ProjectJavaModule4.entities.ServantEntity;
import com.example.ProjectJavaModule4.services.ServantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/servants")
public class ServantController {

    @Autowired
    private ServantService servantService;

    @PostMapping
    public ResponseEntity<ServantEntity> createServant(@RequestBody ServantEntity servant) {
        return ResponseEntity.ok(servantService.createServant(servant));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServantEntity> updateServant(@PathVariable int id, @RequestBody ServantEntity servant) {
        return ResponseEntity.ok(servantService.updateServant(servant, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServant(@PathVariable int id) {
        servantService.deleteServant(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<ServantEntity>> getAllServants() {
        return ResponseEntity.ok(servantService.getAllServants());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServantEntity> getServantById(@PathVariable int id) {
        return ResponseEntity.ok(servantService.getServantById(id));
    }
}
