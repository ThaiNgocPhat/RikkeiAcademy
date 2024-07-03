import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            // Bước 1: Nhập vào hai số nguyên
            System.out.print("Nhập số thứ nhất: ");
            int num1 = scanner.nextInt();
            System.out.print("Nhập số thứ hai: ");
            int num2 = scanner.nextInt();

            // Bước 2: Kiểm tra điều kiện cả hai số bằng 0
            if (num1 == 0 && num2 == 0) {
                throw new Exception("Cả hai số đều bằng 0. Không thể tính UCLN.");
            }

            // Bước 3: Tìm ước chung lớn nhất (UCLN)
            int gcd = findGCD(num1, num2);

            // Bước 4: Hiển thị kết quả
            System.out.println("Ước chung lớn nhất của " + num1 + " và " + num2 + " là: " + gcd);

        } catch (Exception e) {
            System.out.println("Lỗi: " + e.getMessage());
        } finally {
            // Đóng Scanner
            scanner.close();
        }
    }

    // Hàm tìm ước chung lớn nhất (UCLN) bằng thuật toán Euclid
    public static int findGCD(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
