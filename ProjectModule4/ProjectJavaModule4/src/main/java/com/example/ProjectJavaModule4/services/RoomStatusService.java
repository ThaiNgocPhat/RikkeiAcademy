package com.example.ProjectJavaModule4.services;

import com.example.ProjectJavaModule4.entities.RoomStatusEntity;

import java.util.List;

public interface RoomStatusService {
    RoomStatusEntity createRoomStatus(RoomStatusEntity roomStatus);
    RoomStatusEntity updateRoomStatus(RoomStatusEntity roomStatus, int id);
    void deleteRoomStatus(int id);
    List<RoomStatusEntity> getAllRoomStatuses();
    RoomStatusEntity getRoomStatusById(int id);
}
