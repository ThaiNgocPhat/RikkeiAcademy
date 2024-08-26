package com.example.ProjectJavaModule4.services.impl;
import com.example.ProjectJavaModule4.entities.HotelEntity;
import com.example.ProjectJavaModule4.repository.HotelEntityRepository;
import com.example.ProjectJavaModule4.services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    private HotelEntityRepository hotelEntityRepository;

    @Override
    public HotelEntity createHotel(HotelEntity hotel) {
        return hotelEntityRepository.save(hotel);
    }

    @Override
    public HotelEntity updateHotel(HotelEntity hotel, int id) {
        if (hotelEntityRepository.existsById(id)) {
            hotel.setHotelId(id);
            return hotelEntityRepository.save(hotel);
        }
        return null;
    }

    @Override
    public void deleteHotel(int id) {
        hotelEntityRepository.deleteById(id);
    }

    @Override
    public List<HotelEntity> getAllHotels() {
        return hotelEntityRepository.findAll();
    }

    @Override
    public HotelEntity getHotelById(int id) {
        return hotelEntityRepository.findById(id).orElse(null);
    }
}
