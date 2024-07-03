import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            // Bước 1: Nhập vào chuỗi
            System.out.print("Nhập chuỗi cần đảo ngược: ");
            String originalStr = scanner.nextLine();

            // Bước 2: Kiểm tra điều kiện chuỗi rỗng hoặc null
            if (originalStr == null || originalStr.isEmpty()) {
                throw new Exception("Chuỗi không hợp lệ. Vui lòng nhập lại.");
            }

            // Bước 3: Đảo ngược chuỗi
            String reversedStr = reverseString(originalStr);

            // Bước 4: Hiển thị kết quả
            System.out.println("Chuỗi sau khi đảo ngược: " + reversedStr);

        } catch (Exception e) {
            System.out.println("Lỗi: " + e.getMessage());
        } finally {
            // Đóng Scanner
            scanner.close();
        }
    }

    // Hàm đảo ngược chuỗi
    public static String reverseString(String str) {
        StringBuilder sb = new StringBuilder(str);
        return sb.reverse().toString();
    }
}
