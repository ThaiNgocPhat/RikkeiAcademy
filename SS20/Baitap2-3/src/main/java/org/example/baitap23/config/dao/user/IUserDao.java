package org.example.baitap23.dao.user;

import org.example.baitap23.models.User;

public interface IUserDao{
    User login(String email, String password);
    void register(User user);
}
