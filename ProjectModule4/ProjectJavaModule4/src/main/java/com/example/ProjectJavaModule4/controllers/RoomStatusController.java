package com.example.ProjectJavaModule4.controllers;
import com.example.ProjectJavaModule4.entities.RoomStatusEntity;
import com.example.ProjectJavaModule4.services.RoomStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room-status")
public class RoomStatusController {

    @Autowired
    private RoomStatusService roomStatusService;

    @PostMapping
    public ResponseEntity<RoomStatusEntity> createRoomStatus(@RequestBody RoomStatusEntity roomStatus) {
        return ResponseEntity.ok(roomStatusService.createRoomStatus(roomStatus));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoomStatusEntity> updateRoomStatus(@PathVariable int id, @RequestBody RoomStatusEntity roomStatus) {
        return ResponseEntity.ok(roomStatusService.updateRoomStatus(roomStatus, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoomStatus(@PathVariable int id) {
        roomStatusService.deleteRoomStatus(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<RoomStatusEntity>> getAllRoomStatuses() {
        return ResponseEntity.ok(roomStatusService.getAllRoomStatuses());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomStatusEntity> getRoomStatusById(@PathVariable int id) {
        return ResponseEntity.ok(roomStatusService.getRoomStatusById(id));
    }
}
