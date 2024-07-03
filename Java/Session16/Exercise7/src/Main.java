import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {

    // Hàm trả về một mảng ngẫu nhiên 20 số tự nhiên đã sắp xếp đảo ngược (từ lớn đến bé)
    private static Integer[] getArr() {
        Integer[] arr = new Integer[20];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = (int) (Math.random() * 100);
        }
        Arrays.sort(arr, Collections.reverseOrder());
        return arr;
        /** Copyright belong to Rekkei Academy */
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // B1: Tạo mảng sử dụng hàm trên
        Integer[] array = getArr();
        System.out.println("Mảng đã sắp xếp đảo ngược: " + Arrays.toString(array));

        // B2: Lấy 2 số min và max từ bàn phím
        System.out.print("Nhập số min: ");
        int min = scanner.nextInt();
        System.out.print("Nhập số max: ");
        int max = scanner.nextInt();

        // B3: Duyệt mảng để tìm ra vị trí của số lớn hơn gần nhất với min và nhỏ hơn gần nhất với max
        int minIndex = findCeiling(array, min);
        int maxIndex = findFloor(array, max);

        // B4: In ra số lượng số tìm thấy và chi tiết số đó
        if (minIndex <= maxIndex && minIndex != -1 && maxIndex != -1) {
            System.out.println("Số lượng số trong khoảng [" + min + ", " + max + "] là: " + (maxIndex - minIndex + 1));
            System.out.println("Các số đó là: ");
            for (int i = minIndex; i <= maxIndex; i++) {
                System.out.println(array[i]);
            }
        } else {
            System.out.println("Không có số nào trong khoảng [" + min + ", " + max + "].");
        }

        scanner.close();
    }

    // Tìm vị trí của số lớn hơn gần nhất với min (Ceiling)
    public static int findCeiling(Integer[] array, int min) {
        int left = 0;
        int right = array.length - 1;
        int result = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (array[mid] >= min) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }

    // Tìm vị trí của số nhỏ hơn gần nhất với max (Floor)
    public static int findFloor(Integer[] array, int max) {
        int left = 0;
        int right = array.length - 1;
        int result = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (array[mid] <= max) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
