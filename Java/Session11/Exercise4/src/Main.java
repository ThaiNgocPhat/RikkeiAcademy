import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Main{

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

        // B3: Sử dụng thuật toán sắp xếp nổi bọt để sắp xếp các phần tử theo thứ tự tăng dần
        bubbleSort(integerList);

        // In danh sách sau khi sắp xếp
        System.out.println("Danh sách sau khi sắp xếp: " + integerList);
    }

    // Hàm sắp xếp nổi bọt
    public static void bubbleSort(List<Integer> list) {
        int n = list.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                if (list.get(j) > list.get(j + 1)) {
                    // Hoán đổi hai phần tử
                    int temp = list.get(j);
                    list.set(j, list.get(j + 1));
                    list.set(j + 1, temp);
                }
            }
        }
    }
}
