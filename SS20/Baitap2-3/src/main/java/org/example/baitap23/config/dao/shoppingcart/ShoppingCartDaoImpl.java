package org.example.baitap23.dao.shoppingcart;

import org.example.baitap23.models.ShoppingCart;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ShoppingCartDaoImpl implements IShoppingCartDao {
    private final List<ShoppingCart> cartItems = new ArrayList<>();

    @Override
    public void addProductToCart(int userId, int productId, int quantity) {
        for (ShoppingCart item : cartItems) {
            if (item.getUserId() == userId && item.getProductId() == productId) {
                item.setQuantity(item.getQuantity() + quantity);
                return;
            }
        }
        ShoppingCart newItem = new ShoppingCart(0, userId, productId, quantity);
        cartItems.add(newItem);
    }

    @Override
    public void updateCart(int id, int quantity) {
        for (ShoppingCart item : cartItems) {
            if (item.getId() == id) {
                item.setQuantity(quantity);
                return;
            }
        }
    }

    @Override
    public void removeCart(int id) {
        cartItems.removeIf(item -> item.getId() == id);
    }

    @Override
    public void clearCart(int userId) {
        cartItems.removeIf(item -> item.getUserId() == userId);
    }

    @Override
    public List<ShoppingCart> getCartItemsByUserId(int userId) {
        List<ShoppingCart> userCart = new ArrayList<>();
        for (ShoppingCart item : cartItems) {
            if (item.getUserId() == userId) {
                userCart.add(item);
            }
        }
        return userCart;
    }
}
