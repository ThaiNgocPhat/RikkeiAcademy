package com.example.ProjectJavaModule4.services.impl;
import com.example.ProjectJavaModule4.entities.RoomStatusEntity;
import com.example.ProjectJavaModule4.repository.RoomStatusEntityRepository;
import com.example.ProjectJavaModule4.services.RoomStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomStatusServiceImpl implements RoomStatusService {

    @Autowired
    private RoomStatusEntityRepository roomStatusEntityRepository;

    @Override
    public RoomStatusEntity createRoomStatus(RoomStatusEntity roomStatus) {
        return roomStatusEntityRepository.save(roomStatus);
    }

    @Override
    public RoomStatusEntity updateRoomStatus(RoomStatusEntity roomStatus, int id) {
        if (roomStatusEntityRepository.existsById(id)) {
            roomStatus.setStatusId(id);
            return roomStatusEntityRepository.save(roomStatus);
        }
        return null;
    }

    @Override
    public void deleteRoomStatus(int id) {
        roomStatusEntityRepository.deleteById(id);
    }

    @Override
    public List<RoomStatusEntity> getAllRoomStatuses() {
        return roomStatusEntityRepository.findAll();
    }

    @Override
    public RoomStatusEntity getRoomStatusById(int id) {
        return roomStatusEntityRepository.findById(id).orElse(null);
    }
}
