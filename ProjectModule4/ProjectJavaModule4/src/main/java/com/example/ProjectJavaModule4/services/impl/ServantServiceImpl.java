package com.example.ProjectJavaModule4.services.impl;
import com.example.ProjectJavaModule4.entities.ServantEntity;
import com.example.ProjectJavaModule4.repository.ServantEntityRepository;
import com.example.ProjectJavaModule4.services.ServantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServantServiceImpl implements ServantService {

    @Autowired
    private ServantEntityRepository servantEntityRepository;

    @Override
    public ServantEntity createServant(ServantEntity servant) {
        return servantEntityRepository.save(servant);
    }

    @Override
    public ServantEntity updateServant(ServantEntity servant, int id) {
        if (servantEntityRepository.existsById(id)) {
            servant.setServantId(id);
            return servantEntityRepository.save(servant);
        }
        return null;
    }

    @Override
    public void deleteServant(int id) {
        servantEntityRepository.deleteById(id);
    }

    @Override
    public List<ServantEntity> getAllServants() {
        return servantEntityRepository.findAll();
    }

    @Override
    public ServantEntity getServantById(int id) {
        return servantEntityRepository.findById(id).orElse(null);
    }
}
