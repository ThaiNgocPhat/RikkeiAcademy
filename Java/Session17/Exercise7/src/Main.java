import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number1 = 0;
        int number2 = 0;
        boolean validInput = false;

        // Bước 2 và 3: Nhập dữ liệu và xử lý ngoại lệ cho số thứ nhất
        while (!validInput) {
            try {
                System.out.print("Nhập số nguyên thứ nhất: ");
                number1 = Integer.parseInt(scanner.nextLine());
                validInput = true;
            } catch (NumberFormatException e) {
                System.out.println("Lỗi: Vui lòng nhập một số nguyên hợp lệ.");
            }
        }

        validInput = false; // Reset cờ validInput để sử dụng lại cho số thứ hai

        // Bước 2 và 3: Nhập dữ liệu và xử lý ngoại lệ cho số thứ hai
        while (!validInput) {
            try {
                System.out.print("Nhập số nguyên thứ hai: ");
                number2 = Integer.parseInt(scanner.nextLine());
                validInput = true;
            } catch (NumberFormatException e) {
                System.out.println("Lỗi: Vui lòng nhập một số nguyên hợp lệ.");
            }
        }

        // Bước 4: So sánh và tìm số lớn nhất
        int maxNumber = Math.max(number1, number2);

        // Bước 5: Hiển thị kết quả
        System.out.println("Số lớn nhất trong hai số vừa nhập là: " + maxNumber);

        // Kết thúc chương trình
        scanner.close();
    }
}
