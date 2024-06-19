import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Main {

    public static void main(String[] args) {
        // B1: Tạo 1 list số nguyên
        List<Integer> integerList = new ArrayList<>();

        // B2: Thêm phần tử vào list (ở đây thêm ngẫu nhiên 10 số nguyên từ 0 đến 99)
        Random random = new Random();
        for (int i = 0; i < 10; i++) {
            integerList.add(random.nextInt(100));
        }

        // In danh sách ban đầu
        System.out.println("Danh sách ban đầu: " + integerList);

        // B3: Tạo list số nguyên mới để lưu những số nguyên không chia hết cho 2
        List<Integer> oddList = new ArrayList<>();

        // B4: Duyệt list ban đầu và gán những số thỏa mãn điều kiện vào list mới
        for (Integer number : integerList) {
            if (number % 2 != 0) {
                oddList.add(number);
            }
        }

        // In danh sách các số nguyên không chia hết cho 2
        System.out.println("Danh sách các số nguyên không chia hết cho 2: " + oddList);
    }
}
