package rikkei.academy.business.designImpl;

import rikkei.academy.business.design.IUserService;
//import rikkei.academy.business.model.Message;
import rikkei.academy.business.model.User;
//import rikkei.academy.business.model.UserRoles;
import rikkei.academy.business.model.UserRole;
import rikkei.academy.business.until.IOFile;
import rikkei.academy.business.until.InputMethods;
import rikkei.academy.business.until.validation.UserValidate;

import java.io.File;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

public class UserService implements IUserService {
    public static List<User> userList;

    public UserService() {
        //đọc từ file
        userList = IOFile.readFromFile(IOFile.USERS_PATH);
    }

    @Override
    public List<User> findAll() {
        return userList;
    }

    @Override
    public User findById(Integer id) {
        return (User) userList.stream().filter(e -> e.getUserId() == id).findFirst().orElse(null);
    }

    @Override
    public void save(User user) {
        if (findById(user.getUserId()) != null) {
            userList.set(userList.indexOf(findById(user.getUserId())), user);
        } else {
            user.setUserId(getNewId());
            userList.add(user);

        }
        IOFile.writeToFile(IOFile.USERS_PATH, userList);
    }

    public int getNewId() {
        int idMax = 0;
        for (User user : userList) {
            if (user.getUserId() > idMax) {
                idMax = user.getUserId();
            }
        }
        idMax += 1;
        return idMax;
    }

    @Override
    public void deleteById(Integer id) {
        userList.remove(findById(id));
        //luu lai
        IOFile.writeToFile(IOFile.USERS_PATH, userList);

    }


    @Override
    public void registerUser(User newUser) {
        newUser.setUserId(getNewId());
        userList.add(newUser);
        System.out.println("đăng kí thành công");
        IOFile.writeToFile(IOFile.USERS_PATH, userList);
        userList = IOFile.readFromFile(IOFile.USERS_PATH);
    }

    public User findUserByUsername(List<User> userList, String userName) {
        for (User user : userList) {
            if (user.getUserName().equals(userName)) {
                return user;
            }
        }
        return null;
    }


    public static User loginUser(String username, String password) {
        if (userList == null) {
            System.err.println("Danh sách người dùng không tồn tại.");
            return null;
        }
        for (User user : userList) {
            if (user.getUserName().equals(username) && user.getPassword().equals(password)) {
                if (user.isLocked()) {
                    System.err.println("Tài khoản này đã bị khóa.");
                    return null;
                }
                System.out.println("Đăng nhập thành công");
                return user;
            }
        }

        System.err.println("Tên đăng nhập hoặc mật khẩu không chính xác.");
        return null;
    }

    public static void upDateInfo() {
        int idUserLogin = IOFile.readDataLogin(IOFile.USERLOGIN_PATH).getUserId();
        for (User user : userList) {
            if (user.getUserId() == idUserLogin) {
                user.inputData(false);
            }
        }
    }

    public void updateUser(User userLogin) {
        List<User> userList = IOFile.readFromFile(IOFile.USERS_PATH);

        if (userList.isEmpty()) {
            System.out.println("Danh sách người dùng rỗng. Không thể cập nhật.");
            return;
        }

        User userToUpdate = findUserByUsername(userList, userLogin.getUserName());

        if (userToUpdate != null) {
            userToUpdate.inputData(false);

            System.out.println("Bạn muốn thay đổi Email của mình ?");
            boolean changeEmail = InputMethods.getBoolean();
            if (changeEmail) {
                System.out.println("Nhập email mới:");
                while (true) {
                    String newEmail = InputMethods.getString();
                    if (UserValidate.validateEmail(newEmail)) {
                        userToUpdate.setEmail(newEmail);
                        break;
                    } else {
                        System.out.println("Email không hợp lệ. Vui lòng nhập lại.");
                    }
                }
            }

            System.out.println("Bạn muốn thay đổi số điện thoại không? ");
            boolean changePhone = InputMethods.getBoolean();
            if (changePhone) {
                System.out.println("Nhập số điện thoại mới:");
                while (true) {
                    String newPhone = InputMethods.getString();
                    if (UserValidate.validatePhone(newPhone)) {
                        userToUpdate.setPhone(newPhone);
                        break;
                    } else {
                        System.out.println("Số điện thoại không hợp lệ. Vui lòng nhập lại.");
                    }
                }
            }
            System.out.println("Thay đổi thông tin thành công.");
            IOFile.writeToFile(IOFile.USERS_PATH, userList);
        } else {
            System.out.println("Tài khoản có tên: " + userLogin + " không tồn tại.");
        }
    }

    public static void getPW() {
        List<User> users = IOFile.readFromFile(IOFile.USERS_PATH);

        System.out.println("nhập thông tin tài khoản :");
        System.out.println("nhập tên đăng nhập :");
        String userName = InputMethods.getString();
        boolean isEmailValid = false;

        while (!isEmailValid) {
            System.out.println("Nhập email đăng ký: ");
            String userEmail = InputMethods.getString();

            isEmailValid = UserValidate.validateEmail(userEmail);

            if (!isEmailValid) {
                System.err.println("Nhập sai định dạng email");
            } else {
                boolean isEmailRegistered = false;
                for (User user : users) {
                    if (user.getEmail() != null && user.getEmail().equals(userEmail)) {
                        isEmailRegistered = true;
                        break;
                    }
                }
                if (isEmailRegistered) {
                } else {
                    break;
                }
            }
        }


//        System.out.println("số điện thoại liên hệ ");
//        String phone = InputMethods.getString();
//        Message message = new Message();
//        message.setContent("hỗ trợ lấy lại mật khẩu");
//        message.setTitle("tên đăng nhập người dùng " + userName + "số điện thoại liên hệ :" + phone);
//        message.setCreatAt(LocalDate.now());
//        User userLogin = IOFile.readDataLogin(IOFile.USERLOGIN_PATH);
//        message.setSender(userLogin);
//        for (User user : users) {
//            if (user.getRole() == UserRoles.ADMIN) {
//                message.setReceiver(user);
//            }
//        }
//
//        MessageService.messageList.add(message);
//        MessageService.save();
//        System.out.println("đã nhận thông tin chờ phản hồi từ admin");

    }

    //display user
    public void displayAllUsers() {
        List<User> userList = IOFile.readFromFile(IOFile.USERS_PATH);
        if (userList.isEmpty()) {
            System.out.println("Danh sách người dùng rỗng.");
            return;
        }
        userList.sort(Comparator.comparing(User::getUserName));
        System.out.println("Danh sách người dùng:");
        for (User user : userList) {
            System.out.println(user);
        }

    }

    // thay đổi role
    public void changeUserRole() {
        List<User> userList = IOFile.readFromFile(IOFile.USERS_PATH);
        if (userList.isEmpty()) {
            System.out.println("Danh sách người dùng rỗng. Không thể thay đổi role.");
            return;
        }

        System.out.println("Nhập tên đăng nhập của người dùng cần thay đổi role:");
        String userName = InputMethods.getString();
        User userToUpdate = findUserByUsername(userList, userName);

        if (userToUpdate != null) {
            UserRole currentRole = userToUpdate.getRole();
            System.out.println("Role hiện tại của người dùng là: " + currentRole);
            int newRoleInput;
            UserRole newRole;
            do {
                System.out.println("Nhập role mới (1: ADMIN, 2: CLIENT):");
                newRoleInput = InputMethods.getInteger();
                if (newRoleInput == 1) {
                    newRole = UserRole.ADMIN;
                    if (currentRole == UserRole.ADMIN) {
                        System.out.println("Bạn đang là ADMIN rồi, hãy chọn lại.");
                        newRole = null;
                    }
                } else if (newRoleInput == 2) {
                    newRole = UserRole.CLIENT;
                    if (currentRole == UserRole.CLIENT) {
                        System.out.println("Bạn đang là CLIENT rồi, hãy chọn lại.");
                        newRole = null;
                    }
                } else {
                    newRole = null;
                    System.out.println("Role không hợp lệ. Vui lòng nhập lại.");
                }
            } while (newRole == null);

            userToUpdate.setRole(newRole);
            System.out.println("Thay đổi role thành công.");
            IOFile.writeToFile(IOFile.USERS_PATH, userList);
        } else {
            System.out.println("User with username: " + userName + " does not exist.");
        }
    }

    // mở/khóa tài khoản
    public void toggleUserAccountLock() {
        List<User> userList = IOFile.readFromFile(IOFile.USERS_PATH);
        if (userList.isEmpty()) {
            System.out.println("Danh sách người dùng rỗng. Không thể thay đổi trạng thái khóa tài khoản.");
            return;
        }

        System.out.println("Nhập tên đăng nhập của người dùng cần thay đổi trạng thái khóa tài khoản:");
        String userName = InputMethods.getString();
        User userToToggleLock = findUserByUsername(userList, userName);

        if (userToToggleLock != null) {
            boolean currentLockStatus = userToToggleLock.isLocked();
            userToToggleLock.setLocked(!currentLockStatus);
            String message = currentLockStatus ? "Mở khóa tài khoản thành công." : "Khóa tài khoản thành công.";
            System.out.println(message);
            IOFile.writeToFile(IOFile.USERS_PATH, userList);
        } else {
            System.out.println("Người dùng có tên: " + userName + " không tồn tại.");
        }
    }

    // lấy về danh sách quyền
    public void displayAllRoles() {
        System.out.println("Danh sách quyền:");
        for (UserRole role : UserRole.values()) {
            System.out.println(role);
        }
    }

    // tìm kiếm người dùng theo tên
    public void searchUserByName() {
        List<User> userList = IOFile.readFromFile(IOFile.USERS_PATH);
        if (userList.isEmpty()) {
            System.out.println("Danh sách người dùng rỗng. Không thể tìm kiếm.");
            return;
        }

        System.out.println("Nhập tên người dùng cần tìm:");
        String name = InputMethods.getString();
        boolean isFound = false;
        for (User user : userList) {
            if (user.getUserName().contains(name)) {
                System.out.println(user);
                isFound = true;
            }
        }
        if (!isFound) {
            System.out.println("Không tìm thấy người dùng nào có tên chứa: " + name);
        }
    }

    // danh sach nguoi tao moi trong thang
    public void displayNewUsersInMonth() {
        List<User> userList = IOFile.readFromFile(IOFile.USERS_PATH);
        if (userList.isEmpty()) {
            System.out.println("Danh sách người dùng rỗng. Không thể hiển thị người tạo mới trong tháng.");
            return;
        }

        System.out.println("Nhập tháng cần hiển thị người tạo mới:");
        int month = InputMethods.getInteger();
        boolean isFound = false;
        for (User user : userList) {
            LocalDate createdDate = user.getCreatedDate();
            if (createdDate != null && createdDate.getMonthValue() == month) {
                System.out.println(user);
                isFound = true;
            }
        }
        if (!isFound) {
            System.out.println("Không tìm thấy người dùng nào tạo mới trong tháng " + month);
        }
    }

    public static void changePassword(User userLogin) {
        Scanner scanner = new Scanner(System.in);

        String oldPassword;
        do {
            System.out.println("Nhập mật khẩu cũ:");
            oldPassword = scanner.nextLine();

            if (!userLogin.getPassword().equals(oldPassword)) {
                System.out.println("Mật khẩu cũ không đúng. Vui lòng nhập lại.");
            }
        } while (!userLogin.getPassword().equals(oldPassword));

        String newPassword;
        do {
            System.out.println("Nhập mật khẩu mới (ít nhất 6 ký tự):");
            newPassword = scanner.nextLine();
            if (newPassword.length() < 6) {
                System.out.println("Mật khẩu mới phải có ít nhất 6 ký tự. Vui lòng nhập lại.");
            }
        } while (newPassword.length() < 6);

        String confirmPassword;
        do {
            System.out.println("Xác nhận mật khẩu mới:");
            confirmPassword = scanner.nextLine();

            if (!newPassword.equals(confirmPassword)) {
                System.out.println("Mật khẩu xác nhận không khớp. Vui lòng nhập lại.");
            }
        } while (!newPassword.equals(confirmPassword));

        userLogin.setPassword(newPassword);
        System.out.println("Thay đổi mật khẩu thành công.");
    }



}


