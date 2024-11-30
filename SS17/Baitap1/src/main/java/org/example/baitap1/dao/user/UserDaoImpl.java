package org.example.baitap1.dao.user;

import org.example.baitap1.models.User;
import org.example.baitap1.utils.DBConnection;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDaoImpl implements IUserDao{

    //Đăng ký
    public void register(User user){
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        try{
            sta = connection.prepareCall("insert into user (fullName, email, password, address, phone, status) values (?, ?, ?, ?, ?, ?)");
            sta.setString(1, user.getFullName());
            sta.setString(2, user.getEmail());
            sta.setString(3, user.getPassword());
            sta.setString(4, user.getAddress());
            sta.setString(5, user.getPhone());
            sta.setBoolean(6, user.isStatus());
            sta.executeUpdate();
        }catch (SQLException e){
            e.printStackTrace();
        }finally {
            DBConnection.closeConnection(connection);
        }
    }

    //Đăng nhập
    public User login(String email, String password){
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        try{
            sta = connection.prepareCall("select * from user where email =? and password =?");
            sta.setString(1, email);
            sta.setString(2, password);
            ResultSet rs = sta.executeQuery();
            if (rs.next()){
                return new User(
                        rs.getInt("id"),
                        rs.getString("fullName"),
                        rs.getString("email"),
                        rs.getString("password"),
                        rs.getString("address"),
                        rs.getString("phone"),
                        rs.getBoolean("status")
                );
            }
        }catch (SQLException e){
            e.printStackTrace();
        }finally {
            DBConnection.closeConnection(connection);
        }
        return null;
    }
}
