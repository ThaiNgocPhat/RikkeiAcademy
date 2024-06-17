package ra.run;

import ra.businessImp.Product;
import ra.businessImp.Product.Status;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ProductManagement {
    private List<Product> productList = new ArrayList<>();

    public void addProduct() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhập số lượng sản phẩm: ");
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            System.out.println("Nhập thông tin sản phẩm thứ " + (i + 1) + ":");
            Product product = new Product();
            product.inputData();
            productList.add(product);
        }
    }

    public void displayProducts() {
        for (Product product : productList) {
            product.displayData();
        }
    }

    public void updateProduct() {
        Scanner sc = new Scanner(System.in);
        System.out.println(": ");
        String proId = sc.nextLine();
        for (Product product : productList) {
            if (product.getProId().equals(proId)) {
                product.inputData();
                return;
            }
        }
        System.out.println("Không tìm thấy sản phẩm với mã: " + proId);
    }

    public void sortProducts() {
        productList.sort((p1, p2) -> Double.compare(p1.getPrice(), p2.getPrice()));
        System.out.println("Sắp xếp sản phẩm thành công!");
    }

    public void deleteProduct() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhập mã sản phẩm cần xóa: ");
        String proId = sc.nextLine();
        productList.removeIf(product -> product.getProId().equals(proId));
        System.out.println("Xóa sản phẩm thành công!");
    }

    public void searchProductByName() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhập tên sản phẩm cần tìm: ");
        String proName = sc.nextLine();
        for (Product product : productList) {
            if (product.getProName().equalsIgnoreCase(proName)) {
                product.displayData();
            }
        }
    }

    public void changeProductStatus() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhập mã sản phẩm cần thay đổi trạng thái: ");
        String proId = sc.nextLine();
        for (Product product : productList) {
            if (product.getProId().equals(proId)) {
                product.setStatus(product.getStatus() == Status.SHOW ? Status.HIDE : Status.SHOW);
                System.out.println("Thay đổi trạng thái sản phẩm thành công!");
                return;
            }
        }
        System.out.println("Không tìm thấy sản phẩm với mã: " + proId);
    }
}
