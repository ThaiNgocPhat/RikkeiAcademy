import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Bước 1: Khai báo biến và nhập dữ liệu
        System.out.print("Nhập số n để tính số Fibonacci thứ n: ");
        int n = scanner.nextInt();

        // Bước 2: Kiểm tra điều kiện n là số nguyên dương
        if (n <= 0) {
            System.out.println("Lỗi: Vui lòng nhập một số nguyên dương.");
        } else {
            // Bước 3: Tính số Fibonacci thứ n
            int fibonacciNumber = fibonacci(n);

            // Bước 4: Hiển thị kết quả
            System.out.println("Số Fibonacci thứ " + n + " là: " + fibonacciNumber);
        }

        // Bước 5: Kết thúc chương trình
        scanner.close();
    }

    // Hàm tính số Fibonacci thứ n
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }

        int fib = 1, prevFib = 1;
        for (int i = 2; i < n; i++) {
            int temp = fib;
            fib += prevFib;
            prevFib = temp;
        }

        return fib;
    }
}
