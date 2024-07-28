import ra.entity.Product;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    private static Product[] products = new Product[100];
    private static int productCount = 0;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("----------Menu----------");
            System.out.println("1. Hiển thị");
            System.out.println("2. Nhập thông tin sản phẩm");
            System.out.println("3. Tính lợi nhuận");
            System.out.println("4. Sắp xếp theo lợi nhuận giảm dần");
            System.out.println("5. Thống kê sản phẩm theo giá");
            System.out.println("6. Tìm sản phẩm theo tên");
            System.out.println("7. Nhập sản phẩm");
            System.out.println("8. Bán sản phẩm");
            System.out.println("9. Cập nhật trạng thái sản phẩm");
            System.out.println("10. Thoát");
            System.out.print("Chọn chức năng số: ");
            int choice = Integer.parseInt(sc.nextLine());

            switch (choice) {
                case 1:
                    displayProducts();
                    break;
                case 2:
                    System.out.print("Nhập số lượng sản phẩm: ");
                    int n = Integer.parseInt(sc.nextLine());
                    for (int i = 0; i < n; i++) {
                        products[productCount] = new Product();
                        products[productCount].inputData(sc, products, productCount);
                        productCount++;
                    }
                    break;
                case 3:
                    calculateProfit();
                    break;
                case 4:
                    sortProductsByProfit();
                    break;
                case 5:
                    filterProductsByPrice(sc);
                    break;
                case 6:
                    findProductByName(sc);
                    break;
                case 7:
                    addProductQuantity(sc);
                    break;
                case 8:
                    sellProduct(sc);
                    break;
                case 9:
                    updateProductStatus(sc);
                    break;
                case 10:
                    System.out.println("Thoát chương trình");
                    sc.close();
                    System.exit(0);
                default:
                    System.out.println("Chức năng chọn sai, vui lòng nhập lại");
            }
        }
    }

    private static void displayProducts() {
        for (Product product : products) {
            if (product != null) {
                System.out.println(product);
                break;
            }else {
                System.out.println("Danh sách rỗng");
                break;
            }
        }
    }

    private static void calculateProfit() {
        for (Product product : products) {
            if (product != null) {
                System.out.println("Lợi nhuận " + product.getProductId() + ": " + product.profit());
            }
        }
    }

    private static void sortProductsByProfit() {
        Arrays.sort(products, (o1, o2) -> {
            if (o1 == null || o2 == null) {
                return 0;
            }
            return Float.compare(o2.profit(), o1.profit());
        });
    }

    private static void filterProductsByPrice(Scanner sc) {
        System.out.print("Nhập khoảng giá cần tìm (from price): ");
        float fromPrice = Float.parseFloat(sc.nextLine());
        System.out.print("Nhập khoảng giá cần tìm (to price): ");
        float toPrice = Float.parseFloat(sc.nextLine());
        int count = 0;
        for (Product product : products) {
            if (product != null && product.getExportPrice() >= fromPrice && product.getExportPrice() <= toPrice) {
                count++;
            }
        }
        System.out.println("Sản phẩm trong khoảng giá: " + count);
    }

    private static void findProductByName(Scanner sc) {
        System.out.print("Nhập tên sản phẩm cần tìm: ");
        String searchName = sc.nextLine();
        for (Product product : products) {
            if (product != null && product.getProductName().contains(searchName)) {
                System.out.println(product);
            }
        }
    }

    private static void addProductQuantity(Scanner sc) {
        System.out.print("Nhập mã sản phẩm: ");
        String productId = sc.nextLine();
        System.out.print("Nhập số lượng cần nhập: ");
        int quantityToAdd = Integer.parseInt(sc.nextLine());
        for (Product product : products) {
            if (product != null && product.getProductId().equals(productId)) {
                product.setQuantity(product.getQuantity() + quantityToAdd);
                System.out.println("Thêm mới thành công");
                return;
            }
        }
        System.out.println("Không tìm thấy sản phẩm");
    }

    private static void sellProduct(Scanner sc) {
        System.out.print("Nhập tên sản phẩm cần bán: ");
        String productName = sc.nextLine();
        System.out.print("Nhập số lượng muốn mua: ");
        int quantitySellProduct = Integer.parseInt(sc.nextLine());
        for (Product product : products) {
            if (product != null && product.getProductName().equals(productName)) {
                if (product.getQuantity() >= quantitySellProduct) {
                    product.setQuantity(product.getQuantity() - quantitySellProduct);
                    System.out.println("Bán sản phẩm thành công");
                } else {
                    System.out.println("Số lượng không đủ để bán");
                }
                return;
            }
        }
        System.out.println("Không tìm thấy sản phẩm");
    }

    private static void updateProductStatus(Scanner sc) {
        System.out.print("Nhập mã sản phẩm cần cập nhật trạng thái: ");
        String updateStatusById = sc.nextLine();
        for (Product product : products) {
            if (product != null && product.getProductId().equals(updateStatusById)) {
                product.setStatus(!product.isStatus());
                System.out.println("Cập nhật trạng thái thành công");
                return;
            }
        }
        System.out.println("Không tìm thấy sản phẩm");
    }
}
