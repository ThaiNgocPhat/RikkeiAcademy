package com.example.ProjectJavaModule4.services.impl;
import com.example.ProjectJavaModule4.entities.AdminEntity;
import com.example.ProjectJavaModule4.repository.AdminEntityRepository;
import com.example.ProjectJavaModule4.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminEntityRepository adminEntityRepository;

    @Override
    public AdminEntity createAdmin(AdminEntity admin) {
        return adminEntityRepository.save(admin);
    }

    @Override
    public AdminEntity updateAdmin(AdminEntity admin, int id) {
        if (adminEntityRepository.existsById(id)) {
            admin.setAdminId(id);
            return adminEntityRepository.save(admin);
        }
        return null;
    }

    @Override
    public void deleteAdmin(int id) {
        adminEntityRepository.deleteById(id);
    }

    @Override
    public List<AdminEntity> getAllAdmins() {
        return adminEntityRepository.findAll();
    }

    @Override
    public AdminEntity getAdminById(int id) {
        return adminEntityRepository.findById(id).orElse(null);
    }
}
