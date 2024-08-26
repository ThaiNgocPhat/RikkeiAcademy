package com.example.ProjectJavaModule4.controllers;
import com.example.ProjectJavaModule4.entities.RoomEntity;
import com.example.ProjectJavaModule4.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping
    public ResponseEntity<RoomEntity> createRoom(@RequestBody RoomEntity room) {
        return ResponseEntity.ok(roomService.createRoom(room));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoomEntity> updateRoom(@PathVariable int id, @RequestBody RoomEntity room) {
        return ResponseEntity.ok(roomService.updateRoom(room, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoom(@PathVariable int id) {
        roomService.deleteRoom(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<RoomEntity>> getAllRooms() {
        return ResponseEntity.ok(roomService.getAllRooms());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomEntity> getRoomById(@PathVariable int id) {
        return ResponseEntity.ok(roomService.getRoomById(id));
    }
}
