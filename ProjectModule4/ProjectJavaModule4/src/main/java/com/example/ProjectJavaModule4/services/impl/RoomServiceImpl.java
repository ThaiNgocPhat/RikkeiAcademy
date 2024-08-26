package com.example.ProjectJavaModule4.services.impl;
import com.example.ProjectJavaModule4.entities.RoomEntity;
import com.example.ProjectJavaModule4.repository.RoomEntityRepository;
import com.example.ProjectJavaModule4.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomEntityRepository roomEntityRepository;

    @Override
    public RoomEntity createRoom(RoomEntity room) {
        return roomEntityRepository.save(room);
    }

    @Override
    public RoomEntity updateRoom(RoomEntity room, int id) {
        if (roomEntityRepository.existsById(id)) {
            room.setRoomId(id);
            return roomEntityRepository.save(room);
        }
        return null;
    }

    @Override
    public void deleteRoom(int id) {
        roomEntityRepository.deleteById(id);
    }

    @Override
    public List<RoomEntity> getAllRooms() {
        return roomEntityRepository.findAll();
    }

    @Override
    public RoomEntity getRoomById(int id) {
        return roomEntityRepository.findById(id).orElse(null);
    }
}
