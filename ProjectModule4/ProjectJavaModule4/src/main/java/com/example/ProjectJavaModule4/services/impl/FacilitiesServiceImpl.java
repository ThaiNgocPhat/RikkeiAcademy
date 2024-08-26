package com.example.ProjectJavaModule4.services.impl;
import com.example.ProjectJavaModule4.entities.FacilitiesEntity;
import com.example.ProjectJavaModule4.repository.FacilitiesEntityRepository;
import com.example.ProjectJavaModule4.services.FacilitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacilitiesServiceImpl implements FacilitiesService {

    @Autowired
    private FacilitiesEntityRepository facilitiesEntityRepository;

    @Override
    public FacilitiesEntity createFacility(FacilitiesEntity facility) {
        return facilitiesEntityRepository.save(facility);
    }

    @Override
    public FacilitiesEntity updateFacility(FacilitiesEntity facility, int id) {
        if (facilitiesEntityRepository.existsById(id)) {
            facility.setFacilityId(id);
            return facilitiesEntityRepository.save(facility);
        }
        return null;
    }

    @Override
    public void deleteFacility(int id) {
        facilitiesEntityRepository.deleteById(id);
    }

    @Override
    public List<FacilitiesEntity> getAllFacilities() {
        return facilitiesEntityRepository.findAll();
    }

    @Override
    public FacilitiesEntity getFacilityById(int id) {
        return facilitiesEntityRepository.findById(id).orElse(null);
    }
}
