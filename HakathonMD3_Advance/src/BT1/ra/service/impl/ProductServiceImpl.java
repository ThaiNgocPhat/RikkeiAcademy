package BT1.ra.service.impl;

import BT1.ra.model.Product;
import BT1.ra.service.IGenericService;

import java.util.ArrayList;
import java.util.List;

public class ProductServiceImpl implements IGenericService<Product, String> {
    private List<Product> products = new ArrayList<>();

    @Override
    public List<Product> getAll() {
        return products;
    }

    @Override
    public void save(Product product) {
        products.add(product);
    }

    @Override
    public Product findById(String id) {
        for (Product product : products) {
            if (product.getProductId().equals(id)) {
                return product;
            }
        }
        return null;
    }

    @Override
    public void delete(String id) {
        products.removeIf(product -> product.getProductId().equals(id));
    }
}
