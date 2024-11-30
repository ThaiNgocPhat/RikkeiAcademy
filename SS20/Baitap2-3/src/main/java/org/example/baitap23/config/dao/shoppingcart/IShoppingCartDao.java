package org.example.baitap23.dao.shoppingcart;

import org.example.baitap23.models.ShoppingCart;

import java.util.List;

public interface IShoppingCartDao {
    void addProductToCart(int userId, int productId, int quantity);
    void updateCart(int id, int quantity);
    void removeCart(int id);
    void clearCart(int userId);
    List<ShoppingCart> getCartItemsByUserId(int uerId);
}
