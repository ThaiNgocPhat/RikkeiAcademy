import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Nhập số lượng phần tử của mảng
        System.out.print("Nhập số lượng phần tử của mảng: ");
        int n = scanner.nextInt();

        // Khởi tạo mảng và nhập các phần tử từ bàn phím
        int[] array = new int[n];
        System.out.println("Nhập các phần tử của mảng:");
        for (int i = 0; i < n; i++) {
            System.out.print("Phần tử " + (i + 1) + ": ");
            array[i] = scanner.nextInt();
        }

        // Hiển thị mảng ban đầu
        System.out.println("Mảng ban đầu: " + Arrays.toString(array));

        // Thực hiện sắp xếp chèn và hiển thị các bước
        insertionSort(array);

        scanner.close();
    }

    // Thuật toán sắp xếp chèn
    public static void insertionSort(int[] array) {
        int n = array.length;
        for (int i = 1; i < n; ++i) {
            int key = array[i];
            int j = i - 1;

            // Di chuyển các phần tử của array[0..i-1], lớn hơn key, đến vị trí trước vị trí hiện tại của chúng
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
            array[j + 1] = key;

            // Hiển thị mảng sau mỗi bước chèn
            System.out.println("Bước " + i + ": " + Arrays.toString(array));
        }
    }
}
