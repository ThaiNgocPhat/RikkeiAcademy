package com.example.ProjectJavaModule4.controllers;

import com.example.ProjectJavaModule4.entities.AdminEntity;
import com.example.ProjectJavaModule4.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping
    public ResponseEntity<AdminEntity> createAdmin(@RequestBody AdminEntity admin) {
        return ResponseEntity.ok(adminService.createAdmin(admin));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AdminEntity> updateAdmin(@PathVariable int id, @RequestBody AdminEntity admin) {
        return ResponseEntity.ok(adminService.updateAdmin(admin, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable int id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<AdminEntity>> getAllAdmins() {
        return ResponseEntity.ok(adminService.getAllAdmins());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminEntity> getAdminById(@PathVariable int id) {
        return ResponseEntity.ok(adminService.getAdminById(id));
    }
}
