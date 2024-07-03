import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Bước 1: Khởi tạo mảng từ người dùng
        System.out.print("Nhập số lượng phần tử của mảng: ");
        int n = scanner.nextInt();
        int[] array = new int[n];

        System.out.println("Nhập các phần tử của mảng:");
        for (int i = 0; i < n; i++) {
            System.out.print("Phần tử " + (i + 1) + ": ");
            array[i] = scanner.nextInt();
        }

        // Bước 2: Sắp xếp mảng theo thứ tự tăng dần
        Arrays.sort(array);

        // Hiển thị mảng đã sắp xếp
        System.out.println("Mảng sau khi sắp xếp: " + Arrays.toString(array));

        // Bước 3: Khai báo và triển khai hàm binarySearch
        System.out.print("Nhập giá trị cần tìm trong mảng: ");
        int value = scanner.nextInt();

        int index = binarySearch(array, 0, n - 1, value);

        if (index != -1) {
            System.out.println("Giá trị " + value + " được tìm thấy tại vị trí " + index);
        } else {
            System.out.println("Không tìm thấy giá trị " + value + " trong mảng.");
        }

        scanner.close();
    }

    // Bước 3: Khai báo và triển khai hàm binarySearch
    public static int binarySearch(int[] array, int left, int right, int value) {
        while (left <= right) {
            int middle = left + (right - left) / 2;

            // Bước 5: Nếu tìm thấy giá trị tại middle, trả về vị trí middle
            if (array[middle] == value) {
                return middle;
            }

            // Bước 6: Nếu giá trị lớn hơn giá trị ở vị trí middle, tìm kiếm bên phải middle
            if (value > array[middle]) {
                left = middle + 1;
            } else { // Bước 7: Nếu giá trị nhỏ hơn giá trị ở vị trí middle, tìm kiếm bên trái middle
                right = middle - 1;
            }
        }

        // Bước 8: Trả về -1 nếu không tìm thấy giá trị
        return -1;
    }
}
