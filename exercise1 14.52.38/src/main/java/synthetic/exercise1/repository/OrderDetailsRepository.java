package synthetic.exercise1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import synthetic.exercise1.models.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer> {
}
