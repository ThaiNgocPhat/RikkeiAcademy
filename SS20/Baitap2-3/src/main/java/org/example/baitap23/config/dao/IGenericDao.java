package org.example.baitap23.dao;

import java.util.List;

public interface IGenericDao <T, E>{
    List<T> getAll();
    T findById(E id);
    void update(T t);
    void delete(E id);
    void save(T t);
}
