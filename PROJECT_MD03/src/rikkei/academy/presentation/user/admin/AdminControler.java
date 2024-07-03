package rikkei.academy.presentation.user.admin;

import rikkei.academy.business.designImpl.AdminService;
import rikkei.academy.business.designImpl.CatalogService;
import rikkei.academy.business.designImpl.ProductService;
import rikkei.academy.business.designImpl.UserService;
import rikkei.academy.business.model.Catalog;
import rikkei.academy.business.model.Product;
import rikkei.academy.business.model.User;
import rikkei.academy.business.model.UserRole;
import rikkei.academy.business.until.IOFile;
import rikkei.academy.business.until.InputMethods;

import java.util.List;
import java.util.Scanner;

//import rikkei.academy.presentation.User.MessageControler;

public class AdminControler {
    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ANSI_BLACK = "\u001B[30m";
    public static final String ANSI_RED = "\u001B[31m";
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_YELLOW = "\u001B[33m";
    public static final String ANSI_BLUE = "\u001B[34m";
    public static final String ANSI_PURPLE = "\u001B[35m";
    public static final String ANSI_CYAN = "\u001B[36m";
    public static final String ANSI_WHITE = "\u001B[37m";
    static AdminService adminService = new AdminService();

    private static CatalogService catalogService = new CatalogService();
    private static ProductService productService = new ProductService(catalogService);
    private static UserService userService = new UserService();

    public static void adminMenu(User userLogin) {
        UserService service = new UserService();
        String name = IOFile.readDataLogin(IOFile.USERLOGIN_PATH).getUserName();

        while (true) {
            System.out.print("\u001B[H\u001B[2J");

            // In menu với màu chữ và khung khác nhau
            System.out.println(ANSI_BLUE + "╔════════════════════════════════════════╗" + ANSI_RESET);
            System.out.println(ANSI_CYAN + "         Chào mừng ADMINISTRATOR         " + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠════════════════════════════════════════╣" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 1. Quản lý danh mục                    ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 2. Quản lý sản phẩm                    ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 3. Quản lý khách hàng                  ║" + ANSI_RESET);
            System.out.println(ANSI_RED + "║ 0. Đăng xuất                           ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╚════════════════════════════════════════╝" + ANSI_RESET);

            int choice = InputMethods.getInteger();
            switch (choice) {
                case 1:
                    catalogManagement(new Scanner(System.in));
                    break;
                case 2:
                    productManagement(new Scanner(System.in));
                    break;
                case 3:
                    accountManagement(new Scanner(System.in));
                    break;
                case 0:
                    return;
                default:
                    System.out.println("lựa chọn không hợp lệ");
                    break;
            }
        }
    }

    private static void catalogManagement(Scanner scanner) {
        int choice;
        do {
            System.out.println(ANSI_BLUE + "╔═════════════════════════════════════════════════════════════════╗" + ANSI_RESET);
            System.out.println(ANSI_CYAN + "                          QUẢN LÝ DANH MỤC                         " + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠═════════════════════════════════════════════════════════════════╣" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 1. Nhập số danh mục thêm mới và nhập thông tin cho từng danh mục║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 2. Hiển thị thông tin tất cả các danh mục                       ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 3. Tìm kiếm danh mục theo ID danh mục                           ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 4. Sửa thông tin danh mục theo ID danh mục                      ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 5. Xóa danh mục theo ID danh mục                                ║" + ANSI_RESET);
            System.out.println(ANSI_RED + "║ 6. Quay lại                                                     ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╚═════════════════════════════════════════════════════════════════╝" + ANSI_RESET);

            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Số danh mục mà bạn muốn thêm là: ");
                    int numCatalogs = scanner.nextInt();
                    catalogService.addCatalogs(numCatalogs);
                    break;
                case 2:
                    catalogService.displayAllCatalogs();
                    break;
                case 3:
                    System.out.print("Mời bạn nhập mã danh mục mà bạn muốn tìm: ");
                    int catalogIdFind = scanner.nextInt();
                    Catalog catalog = catalogService.findById(catalogIdFind);
                    if (catalog != null) {
                        System.out.println("Đã tìm thấy danh mục: " + catalog);
                        List<Product> products = catalog.getProducts();
                        if (products.isEmpty()) {
                            System.out.println("  Không có sản phẩm trong danh mục này.");
                        } else {
                            System.out.println("  Sản phẩm trong danh mục:");
                            for (Product product : products) {
                                System.out.println("  " + product);
                            }
                        }
                    } else {
                        System.out.println("Không tìm thấy danh mục với mã: " + catalogIdFind);
                    }
                    break;
                case 4:
                    if (catalogService.findAll().isEmpty()) {
                        System.out.println("Mảng rỗng, cần thêm mới trước khi chỉnh sửa.");
                    } else {
                        System.out.print("Mời bạn nhập mã danh mục muốn sửa: ");
                        int catalogIdEdit = scanner.nextInt();
                        scanner.nextLine();
                        System.out.print("Mời bạn nhập tên danh mục mới: ");
                        String newName = scanner.nextLine();
                        System.out.print("Mời bạn nhập mô tả sản phẩm mới: ");
                        String newDescription = scanner.nextLine();
                        catalogService.editCatalog(catalogIdEdit, newName, newDescription);
                    }
                    break;
                case 5:
                    System.out.print("Mời bạn nhập mã danh mục mà bạn muốn xóa: ");
                    int deleteId = scanner.nextInt();
                    catalogService.deleteCatalog(deleteId);
                    break;
                case 6:
                    break;
                default:
                    System.out.println("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            }
        } while (choice != 6);
    }

    private static void productManagement(Scanner scanner) {
        int choice;
        do {
            System.out.println(ANSI_BLUE + "╔════════════════════════════════════════════════╗" + ANSI_RESET);
            System.out.println(ANSI_CYAN + "                 QUẢN LÝ SẢN PHẨM                 " + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠════════════════════════════════════════════════╣" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 1. Nhập số sản phẩm và nhập thông tin sản phẩm ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 2. Hiển thị thông tin các sản phẩm             ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 3. Sắp xếp sản phẩm theo giá giảm dần          ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 4. Xóa sản phẩm theo ID sản phẩm               ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 5. Tìm kiếm sản phẩm theo ID sản phẩm          ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 6. Thay đổi thông tin sản phẩm theo ID sản phẩm║" + ANSI_RESET);
            System.out.println(ANSI_RED + "║ 7. Quay lại                                    ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╚════════════════════════════════════════════════╝" + ANSI_RESET);

            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Nhập số sản phẩm bạn muốn thêm: ");
                    int numProducts = scanner.nextInt();
                    productService.addProducts(numProducts);
                    break;
                case 2:
                    productService.displayAllProducts();
                    break;
                case 3:
                    productService.sortProductsByPrice();
                    break;
                case 4:
                    System.out.print("Nhập ID sản phẩm mà bạn muốn xóa: ");
                    String deleteId = scanner.next();
                    productService.deleteProduct(deleteId);
                    break;
                case 5:
                    System.out.print("Nhập ID sản phẩm mà bạn muốn tìm: ");
                    String productId = scanner.next();
                    Product findProduct = productService.findById(productId);
                    if (findProduct != null) {
                        System.out.println("Đã tìm thấy sản phẩm: " + findProduct);
                    } else {
                        System.out.println("Không tìm thấy sản phẩm với ID: " + productId);
                    }
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

    private static void accountManagement(Scanner scanner) {
        int choice;
        do {
            System.out.println(ANSI_BLUE + "╔═════════════════════════════════════════════╗" + ANSI_RESET);
            System.out.println(ANSI_CYAN + "           QUẢN LÝ TÀI KHOẢN           " + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠═════════════════════════════════════════════╣" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 1. Lấy ra danh sách người dùng              ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 2. Nâng cấp tài khoản thành ADMIN           ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 3. Khóa/Mở tài khoản                        ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 4. Hiển thị danh sách quyền                 ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 5. Tìm kiếm người dùng theo tên             ║" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 6. Danh sách tài khoản tạo mới trong tháng  ║" + ANSI_RESET);
            System.out.println(ANSI_RED + "║ 7. Quay lại                                 ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╚═════════════════════════════════════════════╝" + ANSI_RESET);

            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    userService.displayAllUsers();
                    break;
                case 2:
                    userService.changeUserRole();
                    break;
                case 3:
                    userService.toggleUserAccountLock();
                    break;
                case 4:
                    userService.displayAllRoles();
                    break;
                case 5:
                    userService.searchUserByName();
                    break;
                case 6:
                    userService.displayNewUsersInMonth();
                    break;
                case 7:
                    break;
                default:
                    System.out.println("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            }
        } while (choice != 7);
    }
}

