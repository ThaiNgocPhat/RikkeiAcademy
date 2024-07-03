import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // B1: Tạo mảng cho sẵn phần tử
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};

        // B2: Lấy số cần tìm từ scanner
        System.out.print("Nhập số cần tìm: ");
        int target = scanner.nextInt();

        // Tìm kiếm tuyến tính trong mảng
        boolean found = false;
        int position = -1;
        for (int i = 0; i < array.length; i++) {
            if (array[i] == target) {
                found = true;
                position = i;
                break;
            }
        }

        // In ra kết quả tìm kiếm
        if (found) {
            System.out.println("Giá trị " + target + " được tìm thấy tại vị trí: " + position);
        } else {
            System.out.println("Giá trị " + target + " không được tìm thấy trong mảng.");
        }

        // B3: Tìm số lớn nhất trong mảng và in ra
        int max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        System.out.println("Giá trị lớn nhất trong mảng là: " + max);

        scanner.close();
    }
}