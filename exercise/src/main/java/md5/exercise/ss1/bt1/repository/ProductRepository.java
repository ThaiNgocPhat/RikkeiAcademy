package md5.exercise.ss1.repository;

import md5.exercise.ss1.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
