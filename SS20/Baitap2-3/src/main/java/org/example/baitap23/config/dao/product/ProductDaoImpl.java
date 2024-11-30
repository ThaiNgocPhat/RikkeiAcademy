package org.example.baitap23.dao.product;

import org.example.baitap23.models.Product;
import org.example.baitap23.utils.DBConnection;
import org.springframework.stereotype.Repository;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
@Repository
public class ProductDaoImpl implements IProductDao{
    @Override
    public List<Product> getAll() {
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        ResultSet rs = null;
        List<Product> products = new ArrayList<>();
        try{
            sta = connection.prepareCall("SELECT * FROM product");
            rs = sta.executeQuery();
            while (rs.next()){
                Product product = new Product(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getDouble("price"),
                        rs.getInt("stock"),
                        rs.getBoolean("status")
                );
                products.add(product);
            }
        }catch (SQLException e){
            throw new RuntimeException(e);
        }finally {
            DBConnection.closeConnection(connection);
        }
        return products;
    }

    @Override
    public Product findById(Integer id) {
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        ResultSet rs = null;
        try {
            sta = connection.prepareCall("SELECT * FROM product WHERE id =?");
            rs = sta.executeQuery();
            if (rs.next()){
                return new Product(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getDouble("price"),
                        rs.getInt("stock"),
                        rs.getBoolean("status")
                );
            }
        } catch (SQLException e){
            throw new RuntimeException(e);
        }finally {
            DBConnection.closeConnection(connection);
        }
        return null;
    }

    @Override
    public void update(Product product) {
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        try {
            sta = connection.prepareCall("UPDATE product SET name =?, price =?, stock =?, status =? WHERE id =?");
            sta.setString(1, product.getName());
            sta.setDouble(2, product.getPrice());
            sta.setInt(3, product.getStock());
            sta.setBoolean(4, product.isStatus());
            sta.setInt(5, product.getId());
            sta.executeUpdate();
        } catch (SQLException e){
            throw new RuntimeException(e);
        }finally {
            DBConnection.closeConnection(connection);
        }
    }

    @Override
    public void delete(Integer id) {

    }

    @Override
    public void save(Product product) {
        Connection connection = DBConnection.getConnection();
        CallableStatement sta = null;
        try {
            sta = connection.prepareCall("INSERT INTO product (name, price, stock, status) VALUES (?,?,?,?)");
            sta.setString(1, product.getName());
            sta.setDouble(2, product.getPrice());
            sta.setInt(3, product.getStock());
            sta.setBoolean(4, product.isStatus());
            sta.executeUpdate();
        } catch (SQLException e){
            throw new RuntimeException(e);
        }finally {
            DBConnection.closeConnection(connection);
        }
    }
}
