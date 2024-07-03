import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Nhập chuỗi từ người dùng
        System.out.print("Nhập vào một chuỗi: ");
        String input = scanner.nextLine();

        // Chuyển chuỗi thành mảng các ký tự
        char[] chars = input.toCharArray();

        // Sắp xếp mảng các ký tự theo thứ tự tăng dần
        Arrays.sort(chars);

        // Chuyển mảng đã sắp xếp thành chuỗi
        String sortedString = new String(chars);

        // Hiển thị chuỗi kết quả
        System.out.println("Chuỗi được sắp xếp tăng dần: " + sortedString);

        scanner.close();
    }
}
