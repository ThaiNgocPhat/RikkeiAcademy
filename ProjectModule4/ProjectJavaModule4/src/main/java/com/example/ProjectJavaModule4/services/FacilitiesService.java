package com.example.ProjectJavaModule4.services;

import com.example.ProjectJavaModule4.entities.FacilitiesEntity;

import java.util.List;

public interface FacilitiesService {
    FacilitiesEntity createFacility(FacilitiesEntity facility);
    FacilitiesEntity updateFacility(FacilitiesEntity facility, int id);
    void deleteFacility(int id);
    List<FacilitiesEntity> getAllFacilities();
    FacilitiesEntity getFacilityById(int id);
}
