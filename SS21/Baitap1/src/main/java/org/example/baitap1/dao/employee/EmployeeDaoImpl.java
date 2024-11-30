package org.example.baitap1.dao.employee;
import org.example.baitap1.entity.Employee;
import org.example.baitap1.utils.DBConnection;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
@Repository
public class EmployeeDaoImpl implements IEmployeeDao{
    @Override
    public List<Employee> getAll() {
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        ResultSet rs = null;
        List<Employee> employees = new ArrayList<>();
        try{
            sta = connection.prepareCall("select * from employee");
            rs = sta.executeQuery();
            while(rs.next()){
                Employee employee = new Employee(
                        rs.getInt("id"),
                        rs.getString("fullName"),
                        rs.getDate("dateOfBirth").toLocalDate(),
                        rs.getBoolean("status"));
                employees.add(employee);
            }
        }catch (SQLException e){
            e.printStackTrace();
        }finally {
            DBConnection.closeConnection(connection);
        }
        return employees;
    }

    @Override
    public Employee findById(Integer id) {
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        ResultSet rs = null;
        try{
            sta = connection.prepareCall("select * from employee where id =?");
            sta.setInt(1, id);
            rs = sta.executeQuery();
            while(rs.next()) {
                return new Employee(
                        rs.getInt("id"),
                        rs.getString("fullName"),
                        rs.getDate("dateOfBirth").toLocalDate(),
                        rs.getBoolean("status"));
            }
        }catch (SQLException e){
            e.printStackTrace();
        }finally {
            DBConnection.closeConnection(connection);
        }
        return null;
    }

    @Override
    public void save(Employee employee) {
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        try {
            sta = connection.prepareCall("INSERT INTO employee (fullName, dateOfBirth, status) VALUES (?,?,?)");
            sta.setString(1, employee.getFullName());
            sta.setDate(2, Date.valueOf(employee.getDateOfBirth()));
            sta.setBoolean(3, employee.isStatus());
            sta.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DBConnection.closeConnection(connection);
        }
    }

    @Override
    public void delete(Integer id) {
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        try{
            sta = connection.prepareCall("DELETE FROM employee WHERE id =?");
            sta.setInt(1, id);
            sta.executeUpdate();
        }catch (SQLException e){
            e.printStackTrace();
        }finally {
            DBConnection.closeConnection(connection);
        }
    }

    @Override
    public void update(Employee employee) {
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        try{
            sta = connection.prepareCall("UPDATE employee SET fullName =?, dateOfBirth =?, status =? WHERE id =?");
            sta.setString(1, employee.getFullName());
            sta.setDate(2, Date.valueOf(employee.getDateOfBirth()));
            sta.setBoolean(3, employee.isStatus());
            sta.setInt(4, employee.getId());
            sta.executeUpdate();
        }catch (SQLException e){
            e.printStackTrace();
        }finally {
            DBConnection.closeConnection(connection);
        }
    }
}
