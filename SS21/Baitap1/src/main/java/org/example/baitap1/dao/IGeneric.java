package org.example.baitap1.dao;

import java.util.List;

public interface IGeneric <T, E>{
    List<T> getAll();
    T findById(E id);
    void save(T t);
    void delete(E id);
    void update(T t);
}
