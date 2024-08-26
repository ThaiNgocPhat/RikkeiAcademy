package com.example.ProjectJavaModule4.services;

import com.example.ProjectJavaModule4.entities.RoomTypeEntity;

import java.util.List;

public interface RoomTypeService {
    RoomTypeEntity createRoomType(RoomTypeEntity roomType);
    RoomTypeEntity updateRoomType(RoomTypeEntity roomType, int id);
    void deleteRoomType(int id);
    List<RoomTypeEntity> getAllRoomTypes();
    RoomTypeEntity getRoomTypeById(int id);
}
