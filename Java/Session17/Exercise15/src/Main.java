import java.util.Scanner;

// Khai báo lớp IllegalTriangleException kế thừa từ Exception
class IllegalTriangleException extends Exception {
    public IllegalTriangleException(String message) {
        super(message);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            // Nhập vào 3 cạnh của tam giác
            System.out.println("Nhập vào độ dài 3 cạnh của tam giác:");
            System.out.print("Cạnh 1: ");
            double side1 = scanner.nextDouble();
            System.out.print("Cạnh 2: ");
            double side2 = scanner.nextDouble();
            System.out.print("Cạnh 3: ");
            double side3 = scanner.nextDouble();

            // Kiểm tra điều kiện tam giác
            if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
                throw new IllegalTriangleException("Độ dài cạnh không được âm.");
            }

            if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
                throw new IllegalTriangleException("Độ dài các cạnh không phù hợp để tạo thành tam giác.");
            }

            // Nếu không có ngoại lệ nào xảy ra, thông báo là tam giác hợp lệ
            System.out.println("Ba cạnh trên tạo thành một tam giác hợp lệ.");

        } catch (IllegalTriangleException ex) {
            // Xử lý ngoại lệ IllegalTriangleException
            System.out.println("Lỗi: " + ex.getMessage());
        } catch (Exception ex) {
            // Xử lý ngoại lệ khác
            System.out.println("Lỗi không xác định: " + ex.getMessage());
        } finally {
            // Đóng Scanner
            scanner.close();
        }
    }
}
