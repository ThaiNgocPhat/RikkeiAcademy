import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Bước 1: Khai báo biến và nhập dữ liệu
        int[] array = {3, 6, 8, 12, 14, 17, 20, 22, 25, 30};
        System.out.println("Nhập giá trị cần tìm kiếm: ");
        int target = scanner.nextInt();

        // Bước 2: Sắp xếp mảng
        Arrays.sort(array); // Sử dụng Arrays.sort để sắp xếp mảng

        // Bước 3: Thực hiện tìm kiếm nhị phân
        int result = binarySearch(array, target);

        // Bước 4: Xử lý kết quả
        if (result == -1) {
            System.out.println("Phần tử không được tìm thấy trong mảng.");
        } else {
            System.out.println("Phần tử được tìm thấy tại vị trí: " + result);
        }

        // Bước 5: Kết thúc chương trình
        scanner.close();
    }

    // Hàm tìm kiếm nhị phân
    public static int binarySearch(int[] array, int target) {
        int left = 0;
        int right = array.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            // Kiểm tra giá trị tại vị trí giữa
            if (array[mid] == target) {
                return mid;
            }

            // Nếu giá trị tại vị trí giữa nhỏ hơn giá trị cần tìm
            if (array[mid] < target) {
                left = mid + 1;
            }
            // Nếu giá trị tại vị trí giữa lớn hơn giá trị cần tìm
            else {
                right = mid - 1;
            }
        }

        // Trả về -1 nếu không tìm thấy
        return -1;
    }
}
