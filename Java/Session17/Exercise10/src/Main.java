import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double radius = -1;

        // Bước 1 và 2: Nhập dữ liệu và kiểm tra giá trị âm
        while (radius < 0) {
            System.out.print("Nhập bán kính hình tròn (phải là số dương): ");
            radius = scanner.nextDouble();
            if (radius < 0) {
                System.out.println("Lỗi: Bán kính không được là số âm. Vui lòng nhập lại.");
            }
        }

        // Bước 3: Tính diện tích hình tròn
        double area = Math.PI * radius * radius;

        // Bước 4: Hiển thị kết quả
        System.out.println("Diện tích hình tròn với bán kính " + radius + " là: " + area);

        // Bước 5: Kết thúc chương trình
        scanner.close();
    }
}
