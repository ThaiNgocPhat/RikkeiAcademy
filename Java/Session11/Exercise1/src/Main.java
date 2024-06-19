import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class Main {

    public static void main(String[] args) {
        // Tạo danh sách ngẫu nhiên với tối đa 10 phần tử
        List<Integer> list1 = new ArrayList<>();
        Random random = new Random();

        for (int i = 0; i < 10; i++) {
            list1.add(random.nextInt(100)); // Thêm số nguyên ngẫu nhiên từ 0 đến 99
        }

        // In ra danh sách ngẫu nhiên
        System.out.println("List ngẫu nhiên: " + list1);

        // Sử dụng Collections.max() để tìm phần tử lớn nhất
        int maxElement = Collections.max(list1);
        System.out.println("Phần tử lớn nhất: " + maxElement);

        // Sử dụng Collections.reverse() để đảo ngược danh sách
        Collections.reverse(list1);
        System.out.println("List sau khi đảo ngược: " + list1);

        // Sử dụng Collections.sort() để sắp xếp danh sách tăng dần
        Collections.sort(list1);
        System.out.println("List sau khi sắp xếp: " + list1);

        // Tạo một danh sách khác và thêm các phần tử ngẫu nhiên vào
        List<Integer> list2 = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            list2.add(random.nextInt(100)); // Thêm số nguyên ngẫu nhiên từ 0 đến 99
        }
        System.out.println("List 2 ngẫu nhiên: " + list2);

        // Sử dụng Collections.addAll() để sao chép các phần tử của list2 vào list1
        list1.addAll(list2);
        System.out.println("List 1 sau khi thêm tất cả các phần tử của List 2: " + list1);
    }
}
