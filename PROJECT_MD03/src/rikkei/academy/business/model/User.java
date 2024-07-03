package rikkei.academy.business.model;

import rikkei.academy.business.until.InputMethods;
import rikkei.academy.business.until.validation.UserValidate;

import java.io.Serializable;
import java.time.LocalDate;

public class User implements Serializable {
    private int userId;
    private String userName;
    private String password;
    private String email;
    private boolean status = true;
    private String phone;
    private String address;
    private LocalDate createdDate;
    private UserRole role;
    private boolean isLocked;
//    private List<Product> cart;
//
//    private List<Message> messageList = new ArrayList<>();

    public User() {
    }

    public User(int userId, String userName, String password, String email, boolean status, String phone, String address, LocalDate createdDate, UserRole role, boolean isLocked) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.status = status;
        this.phone = phone;
        this.address = address;
        this.createdDate = createdDate;
        this.role = role;
        this.isLocked = isLocked;
//        this.cart = cart;
//        this.messageList = messageList;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public void changeRole(UserRole newRole) {
        this.role = newRole;
    }

    public boolean isLocked() {
        return isLocked;
    }

    public void setLocked(boolean locked) {
        isLocked = locked;
    }
    //    public List<Product> getExamSessions() {
//        return cart;
//    }
//
//    public void setExamSessions(List<Product> examSessions) {
//        this.cart = examSessions;
//    }
//
//    public List<Message> getMessageList() {
//        return messageList;
//    }
//
//    public void setMessageList(List<Message> messageList) {
//        this.messageList = messageList;
//    }

    // Phương thức để người dùng nhập thông tin với kiểm tra
    public void inputData(boolean isAdd) {

        // Nhập và kiểm tra tên đăng nhập
        while (true) {
            System.out.print("Nhập tên đăng nhập: ");
            String inputUsername = InputMethods.getString();

            if (UserValidate.isUsernameUnique(inputUsername)) {
                this.userName = inputUsername;
                break;
            } else {
                System.err.println("Lỗi: Tên đăng nhập đã tồn tại. Vui lòng chọn tên đăng nhập khác.");
            }
        }

        while (true) {
            System.out.print("Nhập mật khẩu: ");
            String inputPassword = InputMethods.getString();

            if (UserValidate.isPasswordValid(inputPassword)) {
                this.password = inputPassword;
                break;
            } else {
                System.err.println("Lỗi: Mật khẩu phải có ít nhất 6 kí tự. Vui lòng nhập lại.");
            }
        }

        while (true) {
            System.out.print("Nhập email: ");
            String inputEmail = InputMethods.getString();

            if (UserValidate.validateEmail(inputEmail)) {
                this.email = inputEmail;
                break;
            } else {
                System.err.println("Lỗi: Email không hợp lệ. Vui lòng nhập lại.");
            }
        }

        // nhập so dien thoai
        while (true) {
            System.out.print("Nhập số điện thoại: ");
            String inputPhone = InputMethods.getString();

            if (UserValidate.validatePhone(inputPhone)) {
                this.phone = inputPhone;
                break;
            } else {
                System.err.println("Lỗi: Số điện thoại không hợp lệ. Vui lòng nhập lại.");
            }
        }

        // nhap dia chi
        System.out.print("Nhập địa chỉ: ");
        this.address = InputMethods.getString();


        this.createdDate = LocalDate.now();
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", status=" + (status ? "Online" : "Offline") +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", createdDate=" + createdDate +
                ", role=" + role +
                ", isLocked=" + (isLocked ? "Khóa" : "Mở") +
                '}';
    }
}
