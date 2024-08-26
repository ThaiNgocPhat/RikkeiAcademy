package com.example.ProjectJavaModule4.controllers;
import com.example.ProjectJavaModule4.entities.RoomTypeEntity;
import com.example.ProjectJavaModule4.services.RoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room-types")
public class RoomTypeController {

    @Autowired
    private RoomTypeService roomTypeService;

    @PostMapping
    public ResponseEntity<RoomTypeEntity> createRoomType(@RequestBody RoomTypeEntity roomType) {
        return ResponseEntity.ok(roomTypeService.createRoomType(roomType));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoomTypeEntity> updateRoomType(@PathVariable int id, @RequestBody RoomTypeEntity roomType) {
        return ResponseEntity.ok(roomTypeService.updateRoomType(roomType, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoomType(@PathVariable int id) {
        roomTypeService.deleteRoomType(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<RoomTypeEntity>> getAllRoomTypes() {
        return ResponseEntity.ok(roomTypeService.getAllRoomTypes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomTypeEntity> getRoomTypeById(@PathVariable int id) {
        return ResponseEntity.ok(roomTypeService.getRoomTypeById(id));
    }
}
