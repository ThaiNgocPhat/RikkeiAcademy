import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // B1: Tạo mảng cho sẵn phần tử (mảng đã được sắp xếp tăng dần)
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};

        // B2: Lấy số cần tìm từ scanner
        System.out.print("Nhập số cần tìm: ");
        int target = scanner.nextInt();

        // Tìm kiếm nhị phân trong mảng
        int position = binarySearch(array, target);

        // In ra kết quả tìm kiếm
        if (position != -1) {
            System.out.println("Giá trị " + target + " được tìm thấy tại vị trí: " + position);
        } else {
            System.out.println("Giá trị " + target + " không được tìm thấy trong mảng.");
        }

        // B3: Tìm số lớn nhất trong mảng và in ra
        int max = findMax(array);
        System.out.println("Giá trị lớn nhất trong mảng là: " + max);

        scanner.close();
    }

    // Hàm tìm kiếm nhị phân
    public static int binarySearch(int[] array, int target) {
        int left = 0;
        int right = array.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            // Kiểm tra nếu target có ở mid
            if (array[mid] == target) {
                return mid;
            }

            // Nếu target lớn hơn, bỏ qua nửa bên trái
            if (array[mid] < target) {
                left = mid + 1;
            }
            // Nếu target nhỏ hơn, bỏ qua nửa bên phải
            else {
                right = mid - 1;
            }
        }

        // Nếu không tìm thấy target
        return -1;
    }

    // Hàm tìm số lớn nhất trong mảng
    public static int findMax(int[] array) {
        int max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
}