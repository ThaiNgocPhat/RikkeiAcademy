package com.example.ProjectJavaModule4.services.impl;
import com.example.ProjectJavaModule4.entities.RoomTypeEntity;
import com.example.ProjectJavaModule4.repository.RoomTypeEntityRepository;
import com.example.ProjectJavaModule4.services.RoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomTypeServiceImpl implements RoomTypeService {

    @Autowired
    private RoomTypeEntityRepository roomTypeEntityRepository;

    @Override
    public RoomTypeEntity createRoomType(RoomTypeEntity roomType) {
        return roomTypeEntityRepository.save(roomType);
    }

    @Override
    public RoomTypeEntity updateRoomType(RoomTypeEntity roomType, int id) {
        if (roomTypeEntityRepository.existsById(id)) {
            roomType.setTypeId(id);
            return roomTypeEntityRepository.save(roomType);
        }
        return null;
    }

    @Override
    public void deleteRoomType(int id) {
        roomTypeEntityRepository.deleteById(id);
    }

    @Override
    public List<RoomTypeEntity> getAllRoomTypes() {
        return roomTypeEntityRepository.findAll();
    }

    @Override
    public RoomTypeEntity getRoomTypeById(int id) {
        return roomTypeEntityRepository.findById(id).orElse(null);
    }
}
