package com.example.ProjectJavaModule4.services;
import com.example.ProjectJavaModule4.entities.AdminEntity;
import java.util.List;

public interface AdminService {
    AdminEntity createAdmin(AdminEntity admin);
    AdminEntity updateAdmin(AdminEntity admin, int id);
    void deleteAdmin(int id);
    List<AdminEntity> getAllAdmins();
    AdminEntity getAdminById(int id);
}
