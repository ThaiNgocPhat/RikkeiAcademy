import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // Bước 1: Tạo mảng số nguyên và gọi hàm getArr() để gán
        Integer[] arr = getArr();

        // Bước 2: In ra mảng số nguyên đó
        System.out.println("Mảng số nguyên đã được sắp xếp giảm dần:");
        printArray(arr);

        // Bước 3: Nhập số nguyên từ người dùng
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhập vào số nguyên cần tìm kiếm trong mảng: ");
        int searchNumber = scanner.nextInt();

        // Bước 4: Tìm kiếm nhị phân để tìm vị trí của số nhập vào
        int index = binarySearch(arr, searchNumber);

        // Bước 5: In vị trí của số đó ra
        if (index != -1) {
            System.out.println("Số nguyên " + searchNumber + " được tìm thấy tại vị trí " + index + " trong mảng.");
        } else {
            System.out.println("Không tìm thấy số nguyên " + searchNumber + " trong mảng.");
        }

        scanner.close();
    }

    // Phương thức để tạo mảng 20 số nguyên ngẫu nhiên và sắp xếp giảm dần
    private static Integer[] getArr() {
        Integer[] arr = new Integer[20];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = (int) (Math.random() * 99) + 1; // Giá trị từ 1 đến 99
        }
        Arrays.sort(arr, Collections.reverseOrder()); // Sắp xếp giảm dần
        return arr;
    }

    // Phương thức để in ra mảng số nguyên
    private static void printArray(Integer[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Phương thức tìm kiếm nhị phân trả về vị trí của số trong mảng, -1 nếu không tìm thấy
    private static int binarySearch(Integer[] arr, int value) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == value) {
                return mid; // Trả về vị trí của số trong mảng
            } else if (arr[mid] < value) {
                right = mid - 1; // Tìm trong nửa bên trái của mảng
            } else {
                left = mid + 1; // Tìm trong nửa bên phải của mảng
            }
        }

        return -1; // Trả về -1 nếu không tìm thấy số trong mảng
    }
}
