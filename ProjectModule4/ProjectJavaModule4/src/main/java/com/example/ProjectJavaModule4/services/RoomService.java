package com.example.ProjectJavaModule4.services;
import com.example.ProjectJavaModule4.entities.RoomEntity;
import java.util.List;

public interface RoomService {
    RoomEntity createRoom(RoomEntity room);
    RoomEntity updateRoom(RoomEntity room, int id);
    void deleteRoom(int id);
    List<RoomEntity> getAllRooms();
    RoomEntity getRoomById(int id);
}
