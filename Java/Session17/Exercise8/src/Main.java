import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Bước 1: Khai báo biến và nhập dữ liệu
        System.out.print("Nhập một số nguyên dương: ");
        int number = scanner.nextInt();

        // Bước 2: Kiểm tra điều kiện số không phải số nguyên tố
        if (number < 2) {
            System.out.println("Lỗi: Số phải lớn hơn 1.");
        } else {
            boolean isPrime = true;

            // Bước 3: Kiểm tra tính số nguyên tố
            for (int i = 2; i <= Math.sqrt(number); i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            // Bước 4: Hiển thị kết quả
            if (isPrime) {
                System.out.println(number + " là số nguyên tố.");
            } else {
                System.out.println(number + " không phải là số nguyên tố.");
            }
        }

        // Bước 5: Kết thúc chương trình
        scanner.close();
    }
}
