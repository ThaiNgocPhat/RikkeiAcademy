package com.example.ProjectJavaModule4.services;
import com.example.ProjectJavaModule4.entities.ServantEntity;
import java.util.List;

public interface ServantService {
    ServantEntity createServant(ServantEntity servant);
    ServantEntity updateServant(ServantEntity servant, int id);
    void deleteServant(int id);
    List<ServantEntity> getAllServants();
    ServantEntity getServantById(int id);
}
