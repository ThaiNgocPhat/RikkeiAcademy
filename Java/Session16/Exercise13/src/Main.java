import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        // Bước 1: Gọi hàm getArr() để lấy mảng số nguyên ngẫu nhiên
        int[] arr = getArr();

        // Bước 2: In ra mảng trước khi sắp xếp
        System.out.println("Mảng trước khi sắp xếp:");
        printArray(arr);

        // Bước 3: Sắp xếp mảng bằng ba thuật toán khác nhau
        bubbleSort(arr.clone()); // Sắp xếp nổi bọt
        selectionSort(arr.clone()); // Sắp xếp chọn
        insertionSort(arr.clone()); // Sắp xếp chèn
    }

    // Phương thức để tạo mảng số nguyên ngẫu nhiên từ 1 đến 100
    private static int[] getArr() {
        int[] arr = new int[20];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = (int) (Math.random() * 100) + 1; // Số nguyên từ 1 đến 100
        }
        return arr;
    }

    // Phương thức để in ra mảng số nguyên
    private static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Phương thức sắp xếp nổi bọt (Bubble Sort)
    private static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Hoán đổi vị trí hai phần tử
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        System.out.println("\nMảng sau khi sắp xếp bằng Bubble Sort:");
        printArray(arr);
    }

    // Phương thức sắp xếp chọn (Selection Sort)
    private static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            // Hoán đổi vị trí hai phần tử
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        System.out.println("\nMảng sau khi sắp xếp bằng Selection Sort:");
        printArray(arr);
    }

    // Phương thức sắp xếp chèn (Insertion Sort)
    private static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;

            // Di chuyển các phần tử lớn hơn key đến vị trí trước đó của nó
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        System.out.println("\nMảng sau khi sắp xếp bằng Insertion Sort:");
        printArray(arr);
    }
}
