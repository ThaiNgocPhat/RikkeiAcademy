import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // B1: Tạo một biến chuỗi, lấy dữ liệu từ bàn phím
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhập một chuỗi: ");
        String input = scanner.nextLine();

        // B2: Tạo một List số nguyên
        List<Integer> integerList = new ArrayList<>();

        // B3: Duyệt chuỗi đó, trong vòng lặp ép kiểu từng phần tử về Integer
        for (char ch : input.toCharArray()) {
            try {
                // Chuyển đổi ký tự thành số nguyên
                int number = Integer.parseInt(String.valueOf(ch));
                integerList.add(number);
            } catch (NumberFormatException e) {
                // Nếu vào catch thì add số 0 vào list và thông báo
                integerList.add(0);
                System.out.println("Có một ký tự không phải số nguyên được thay thế = 0: " + ch);
            }
        }

        // In ra danh sách số nguyên
        System.out.println("Danh sách các số nguyên: " + integerList);
    }
}
