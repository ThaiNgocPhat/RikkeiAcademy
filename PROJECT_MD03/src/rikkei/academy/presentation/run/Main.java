package rikkei.academy.presentation.run;

import rikkei.academy.business.designImpl.UserService;
import rikkei.academy.business.model.User;
import rikkei.academy.business.model.UserRole;
import rikkei.academy.business.until.IOFile;
import rikkei.academy.business.until.InputMethods;
import rikkei.academy.presentation.user.admin.AdminControler;
import rikkei.academy.presentation.user.client.ClientControler;

public class Main {
    public static UserService userService = new UserService();
    // Mã màu ANSI
    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ANSI_BLACK = "\u001B[30m";
    public static final String ANSI_RED = "\u001B[31m";
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_YELLOW = "\u001B[33m";
    public static final String ANSI_BLUE = "\u001B[34m";
    public static final String ANSI_PURPLE = "\u001B[35m";

    public static void main(String[] args) {
        User admin = new User();
        admin.setUserName("admin");
        admin.setPassword("admin");
        admin.setRole(UserRole.ADMIN);
        userService.registerUser(admin);
        while (true) {
            System.out.println(ANSI_BLUE + "╔════════════════════════╗" + ANSI_RESET);
            System.out.println(ANSI_GREEN + "║      420 Together      ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠════════════════════════╣" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 1. Đăng nhập           ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠════════════════════════╣" + ANSI_RESET);

            System.out.println(ANSI_YELLOW + "║ 2. Đăng kí             ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠════════════════════════╣" + ANSI_RESET);
            System.out.println(ANSI_YELLOW + "║ 3. Quên mật khẩu       ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╠════════════════════════╣" + ANSI_RESET);

            System.out.println(ANSI_RED + "║ 0. Thoát chương trình  ║" + ANSI_RESET);
            System.out.println(ANSI_BLUE + "╚════════════════════════╝" + ANSI_RESET);

            int choice = InputMethods.getInteger();
            switch (choice) {
                case 1:
                    login();
                    break;
                case 2:
                    registerUser();
                    break;
//                case 3:
//                    UserService.getPW();
//                    break;
                case 0:
                    System.exit(0);
                default:
                    System.out.println("lựa chọn không hợp lệ");
                    break;

            }
        }
    }

    public static void login() {

        System.out.println("nhập tên đăng nhập");
        String name = InputMethods.getString();
        System.out.println("nhập mật khẩu");
        String mk = InputMethods.getString();
        User userLogin = UserService.loginUser(name, mk);
        if (userLogin == null) {
            System.out.println("sai tên đăng nhập và mật khẩu");
            return;
        }
        IOFile.writeToFile(IOFile.USERLOGIN_PATH, userLogin);
        if (userLogin.isStatus()) {

            switch (userLogin.getRole()) {
                case CLIENT:
                    ClientControler.clientMenu(userLogin);
                    break;
                case ADMIN:
                    AdminControler.adminMenu(userLogin);
            }


        } else {
            System.err.println("tài khoản [" + name + "]đã bị khóa liên hệ admin để biết thông tin chi tiết");
        }
    }

    public static void registerUser() {
        System.out.println("nhập thông tin người dùng");
        User newUser = new User();
        newUser.inputData(true);

        newUser.setRole(UserRole.CLIENT);
        userService.registerUser(newUser);
    }

}