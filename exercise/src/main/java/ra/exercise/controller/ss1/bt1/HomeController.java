package ra.exercise.controller.ss1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import ra.exercise.entity.ss1.Product;
import ra.exercise.service.ss1.ProductService;

import java.util.List;

@Controller
@RequestMapping("/buoi1")
public class HomeController {
    @Autowired
    private ProductService productService;

    // Hiển thị danh sách sản phẩm
    @GetMapping
    public String getAllProduct(Model model){
        List<Product> products = productService.findAll();
        model.addAttribute("products", products);
        return "ss1/list";
    }

    // Form thêm mới sản phẩm
    @GetMapping("/add")
    public String formAdd(Model model){
        model.addAttribute("product", new Product());
        return "ss1/add";
    }

    // Thêm mới sản phẩm
    @PostMapping("/add")
    public String addProduct(Product product){
        productService.save(product);
        return "redirect:/buoi1";
    }

    // Xóa sản phẩm theo ID
    @GetMapping("/delete/{productId}")
    public String deleteProduct(@PathVariable("productId") Integer productId){
        productService.delete(productId);
        return "redirect:/buoi1";
    }

    // Form sửa sản phẩm
    @GetMapping("/edit/{productId}")
    public String formEdit(@PathVariable("productId") Integer productId, Model model){
        Product product = productService.findById(productId).orElse(null);
        if (product != null) {
            model.addAttribute("product", product);
            return "ss1/edit";
        }
        return "redirect:/buoi1";
    }

    // Cập nhật sản phẩm
    @PostMapping("/edit/{productId}")
    public String editProduct(@PathVariable Integer productId, @ModelAttribute Product product) {
        productService.update(product);
        return "redirect:/buoi1";
    }

}
