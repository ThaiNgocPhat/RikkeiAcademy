import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Bước 1: Khai báo biến và nhập dữ liệu
        System.out.print("Nhập số lượng phần tử của mảng: ");
        int n = scanner.nextInt();

        int[] array = new int[n];

        for (int i = 0; i < n; i++) {
            System.out.print("Nhập phần tử thứ " + (i + 1) + ": ");
            array[i] = scanner.nextInt();
        }

        try {
            // Bước 2: Kiểm tra trường hợp mảng rỗng
            if (array.length == 0) {
                throw new Exception("Mảng rỗng! Không có phần tử nào để tìm số lớn nhất.");
            }

            // Bước 3: Tìm số lớn nhất
            int max = findMax(array);

            // Bước 4: Hiển thị kết quả
            System.out.println("Số lớn nhất trong mảng là: " + max);
        } catch (Exception e) {
            // Hiển thị thông báo lỗi nếu mảng rỗng
            System.out.println(e.getMessage());
        } finally {
            // Đóng scanner
            scanner.close();
        }
    }

    // Phương thức tìm số lớn nhất trong mảng
    public static int findMax(int[] array) {
        int max = array[0]; // Giả sử phần tử đầu tiên là lớn nhất

        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }

        return max;
    }
}
