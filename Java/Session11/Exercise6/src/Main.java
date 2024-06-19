import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        // Tạo 1 list các số nguyên chứa các phần tử cho sẵn
        List<Integer> integerList = new ArrayList<>();
        integerList.add(1);
        integerList.add(2);
        integerList.add(3);
        integerList.add(2);
        integerList.add(4);
        integerList.add(1);
        integerList.add(5);
        integerList.add(3);

        // In danh sách ban đầu
        System.out.println("Danh sách ban đầu: " + integerList);

        // Tạo 1 list mới để chứa các phần tử không trùng lặp
        List<Integer> uniqueList = new ArrayList<>();

        // Duyệt list cũ sử dụng phương thức contains() để kiểm tra trùng lặp
        for (Integer number : integerList) {
            if (!uniqueList.contains(number)) {
                uniqueList.add(number);
            }
        }

        // In ra danh sách các phần tử trong list mới
        System.out.println("Danh sách các phần tử không trùng lặp: " + uniqueList);
    }
}
