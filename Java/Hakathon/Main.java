import ra.run.ProductManagement;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ProductManagement pm = new ProductManagement();
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("***************PRODUCT-MANAGER-MENU***************");
            System.out.println("1. Nhập số sản phẩm và nhập thông tin sản phẩm");
            System.out.println("2. Hiển thị thông tin các sản phẩm");
            System.out.println("3. Cập nhật thông tin sản phẩm");
            System.out.println("4. Sắp xếp sản phẩm");
            System.out.println("5. Xóa sản phẩm theo mã sản phẩm");
            System.out.println("6. Tìm kiếm sản phẩm theo tên sản phẩm");
            System.out.println("7. Thay đổi trạng thái của sản phẩm theo mã sản phẩm");
            System.out.println("8. Thoát");
            System.out.print("Nhập lựa chọn của bạn: ");
            choice = sc.nextInt();
            sc.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    pm.addProduct();
                    break;
                case 2:
                    pm.displayProducts();
                    break;
                case 3:
                    pm.updateProduct();
                    break;
                case 4:
                    pm.sortProducts();
                    break;
                case 5:
                    pm.deleteProduct();
                    break;
                case 6:
                    pm.searchProductByName();
                    break;
                case 7:
                    pm.changeProductStatus();
                    break;
                case 8:
                    System.out.println("Thoát chương trình.");
                    break;
                default:
                    System.out.println("Lựa chọn không hợp lệ!");
            }
        } while (choice != 8);
    }
}
