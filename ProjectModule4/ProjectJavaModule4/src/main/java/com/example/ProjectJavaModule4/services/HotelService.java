package com.example.ProjectJavaModule4.services;
import com.example.ProjectJavaModule4.entities.HotelEntity;

import java.util.List;

public interface HotelService {
    HotelEntity createHotel(HotelEntity hotel);
    HotelEntity updateHotel(HotelEntity hotel, int id);
    void deleteHotel(int id);
    List<HotelEntity> getAllHotels();
    HotelEntity getHotelById(int id);
}
