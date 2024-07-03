package rikkei.academy.presentation.user.client;

import rikkei.academy.business.designImpl.*;
import rikkei.academy.business.model.Catalog;
import rikkei.academy.business.model.Product;
import rikkei.academy.business.model.User;
import rikkei.academy.business.until.IOFile;
import rikkei.academy.business.until.InputMethods;

import java.util.Scanner;

import static rikkei.academy.business.designImpl.ClientService.displayLoggedInUserInfo;
//import rikkei.academy.presentation.User.MessageControler;

public class ClientControler {
    private static CatalogService catalogService = new CatalogService();
    private static ProductService productService = new ProductService(catalogService);
    private static ClientService clientService = new ClientService();
    private static UserService userService = new UserService();

    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ANSI_BLACK = "\u001B[30m";
    public static final String ANSI_RED = "\u001B[31m";
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_YELLOW = "\u001B[33m";
    public static final String ANSI_BLUE = "\u001B[34m";
    public static final String ANSI_PURPLE = "\u001B[35m";
    public static final String ANSI_CYAN = "\u001B[36m";
    public static final String ANSI_WHITE = "\u001B[37m";
    static ClientService service = new ClientService();

    public static void clientMenu(User userLogin) {
        String name = IOFile.readDataLogin(IOFile.USERLOGIN_PATH).getUserName();

        while (true) {
            // Xóa màn hình
            System.out.print("\u001B[H\u001B[2J");

            // In menu với màu chữ và khung khác nhau
            System.out.println(ANSI_BLUE + "╔════════════════════════════════════════════╗" + ANSI_RESET);
            System.out.println(ANSI_CYAN + "   Chào mừng " + name + " đến với 420Together " + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠════════════════════════════════════════════╣" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ Nhập lựa chọn của bạn:                     ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 1. Sản phẩm                            ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 2. Tài khoản                            ║" + ANSI_RESET);
            System.out.println(ANSI_RED + "║ 0. Đăng xuất                               ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╚════════════════════════════════════════════╝" + ANSI_RESET);


            int choice = InputMethods.getInteger();
            switch (choice) {
                case 1:
                    ClientControler.clientProduct(new Scanner(System.in));
                    break;
                case 2:
                    ClientControler.clientAccount(new Scanner(System.in), userLogin);
                    break;
//                case 3:
//                    startExam();
//                    break;
//                case 4:
//                    service.viewInfo();
//                    break;
//                case 5:
//                    updateInfo();
//                    break;
                case 0:

                    return;
                default:
                    System.out.println("lựa chọn không hợp lệ");
                    break;
            }
        }
    }

    private static void clientProduct(Scanner scanner) {
        int choice;
        do {
            System.out.println(ANSI_BLUE + "╔════════════════════════════════════════════════╗" + ANSI_RESET);
            System.out.println(ANSI_CYAN + "                 GIAO DIỆN SẢN PHẨM                 " + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠════════════════════════════════════════════════╣" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 1. Tìm kiếm sản phẩm theo tên sản phẩm/danh mục ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 2. Hiển thị danh sách các sản phẩm đang được bán   ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 3. Hiển thị sản phẩm theo danh mục          ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 4. Chi tiết thông tin sản phẩm theo ID         ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 5.           ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 6. ║" + ANSI_RESET);
            System.out.println(ANSI_RED + "║ 7. Quay lại                                    ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╚════════════════════════════════════════════════╝" + ANSI_RESET);

            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    Scanner sc = new Scanner(System.in);
                    System.out.println("Nhập tên sản phẩm (nhấn Enter để bỏ qua):");
                    String productName = sc.nextLine();
                    if (productName.isEmpty()) {
                        productName = null;
                    }

                    System.out.println("Nhập tên danh mục (nhấn Enter để bỏ qua):");
                    String catalogName = sc.nextLine();
                    if (catalogName.isEmpty()) {
                        catalogName = null;
                    }

                    productService.searchProductByNameAndCatalog(productName, catalogName);
                    break;
                case 2:
                    productService.displayAllProducts();
                    break;
                case 3:
                    catalogService.displayAllCatalogs();
                    break;
                case 4:
                    System.out.print("Nhập ID sản phẩm mà bạn muốn tìm: ");
                    String productId = scanner.next();
                    Product findProduct = productService.findById(productId);
                    if (findProduct != null) {
                        System.out.println("Đã tìm thấy sản phẩm: " + findProduct);
                    } else {
                        System.out.println("Không tìm thấy sản phẩm với ID: " + productId);
                    }
                    break;
                case 5:

                    break;
                case 6:
                    String id;
                    Product product;
                    do {
                        System.out.print("Nhập ID sản phẩm mà bạn muốn sửa: ");
                        id = scanner.next();
                        scanner.nextLine();
                        product = productService.findById(id);
                        if (product == null) {
                            System.out.println("Không tìm thấy sản phẩm với ID: " + id + ". Vui lòng nhập lại.");
                        }
                    } while (product == null);

                    String newName;
                    do {
                        System.out.print("Mời bạn nhập tên sản phẩm mới (Không được để trống): ");
                        newName = scanner.nextLine();
                    } while (newName.isEmpty());

                    double newPrice;
                    do {
                        System.out.print("Mời bạn nhập giá mới (phải lớn hơn 0): ");
                        newPrice = scanner.nextDouble();
                        scanner.nextLine();
                    } while (newPrice <= 0.0);

                    System.out.print("Mời bạn nhập mô tả mới: ");
                    String newDescription = scanner.nextLine();

                    int newStock;
                    do {
                        System.out.print("Mời bạn nhập số lượng mới (ít nhất là 10): ");
                        newStock = scanner.nextInt();
                        scanner.nextLine();
                    } while (newStock < 10);

                    Catalog newCatalog = null;
                    while (newCatalog == null) {
                        System.out.print("Mời bạn nhập tên danh mục mới mà bạn muốn bỏ sản phẩm vào (không được để null):");
                        String newCatalogName = scanner.nextLine();
                        newCatalog = catalogService.getCatalogByName(newCatalogName);
                        if (newCatalog == null) {
                            System.out.println("Không tìm thấy danh mục. Tạo mới danh mục.");
                            Catalog catalog = new Catalog();
                            catalog.setCatalogName(newCatalogName);

                            int catalogId;
                            do {
                                System.out.print("Mời bạn nhập ID danh mục mới (Chỉ được nhập số): ");
                                catalogId = scanner.nextInt();
                                scanner.nextLine();
                                if (catalogService.findById(catalogId) != null) {
                                    System.out.println("ID danh mục đã tồn tại. Vui lòng nhập lại.");
                                }
                            } while (catalogService.findById(catalogId) != null);
                            catalog.setCatalogId(catalogId);

                            System.out.print("Mời bạn nhập mô tả danh mục mới (không được để trống):");
                            catalog.setDescriptions(scanner.nextLine());

                            catalogService.save(catalog);
                            newCatalog = catalog;
                        }
                    }

                    System.out.print("Mời bạn cập nhật trạng thái mới (true/false): ");
                    boolean newStatus = scanner.nextBoolean();
                    scanner.nextLine();

                    productService.editProduct(id, newName, newPrice, newDescription, newStock, newCatalog, newStatus);
                    IOFile.writeToFile(IOFile.PRODUCT_PATH, productService.findAll());
                    System.out.println("Sửa sản phẩm thành công!");
                    break;
                case 7:
                    break;
                default:
                    System.out.println("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            }
        } while (choice != 7);
    }

    private static void clientAccount(Scanner scanner, User userLogin) {
        int choice;
        do {
            System.out.println(ANSI_BLUE + "╔════════════════════════════════════════════════╗" + ANSI_RESET);
            System.out.println(ANSI_CYAN + "                 GIAO DIỆN TÀI KHOẢN                 " + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠════════════════════════════════════════════════╣" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 1. Thông tin tài khoản ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 2. Cập nhật thông tin tài khoản   ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 3. Thay đổi mật khẩu          ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 4. Thêm mới địa chỉ nhận hàng         ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 5. Xóa địa chỉ theo mã địa chỉ          ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 6. Lấy ra danh sách địa chỉ của người dùng ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 7. lấy địa chỉ người dùng theo addressId ║" + ANSI_RESET);
            System.out.println(ANSI_RED + "║ 8. Quay lại                                    ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╚════════════════════════════════════════════════╝" + ANSI_RESET);

            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    ClientService.displayLoggedInUserInfo(userLogin);
                    break;
                case 2:
                    userService.updateUser(userLogin);
                    break;
                case 3:
                    userService.changePassword(userLogin);
                    break;
                case 4:

                case 5:

                    break;
                case 6:

                case 7:
                    break;
                case 8:
                    break;
                default:
                    System.out.println("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            }
        } while (choice != 8);
    }


}
