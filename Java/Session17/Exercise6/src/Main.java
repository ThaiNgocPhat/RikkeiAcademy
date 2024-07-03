import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Bước 1: Khai báo biến và nhập dữ liệu
        System.out.print("Nhập số bị chia: ");
        int dividend = scanner.nextInt();

        System.out.print("Nhập số chia: ");
        int divisor = scanner.nextInt();

        // Bước 2: Xử lý ngoại lệ
        try {
            // Bước 3: Thực hiện phép chia
            int result = dividend / divisor;

            // Bước 4: Hiển thị kết quả
            System.out.println("Kết quả của phép chia là: " + result);
        } catch (ArithmeticException e) {
            // Bước 4: Hiển thị thông báo lỗi
            System.out.println("Lỗi: Số chia không được bằng 0.");
        }

        // Bước 5: Kết thúc chương trình
        scanner.close();
    }
}
