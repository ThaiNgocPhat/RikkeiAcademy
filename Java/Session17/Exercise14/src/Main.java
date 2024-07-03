import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            // Bước 1: Nhập số lượng phần tử của mảng
            System.out.print("Nhập số lượng phần tử của mảng: ");
            int n = scanner.nextInt();

            // Bước 2: Kiểm tra điều kiện mảng rỗng
            if (n <= 0) {
                throw new Exception("Mảng không có phần tử hoặc số lượng phần tử không hợp lệ.");
            }

            // Bước 3: Nhập giá trị cho mảng
            int[] arr = new int[n];
            System.out.println("Nhập giá trị cho mảng:");
            for (int i = 0; i < n; i++) {
                arr[i] = scanner.nextInt();
            }

            // Bước 4: Tính giá trị trung bình
            int sum = 0;
            for (int num : arr) {
                sum += num;
            }
            double average = (double) sum / n;

            // Bước 5: Hiển thị kết quả
            System.out.println("Giá trị trung bình của mảng là: " + average);

        } catch (Exception e) {
            System.out.println("Lỗi: " + e.getMessage());
        } finally {
            // Đóng Scanner
            scanner.close();
        }
    }
}
