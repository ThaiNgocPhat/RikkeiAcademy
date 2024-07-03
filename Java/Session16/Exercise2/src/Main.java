import java.util.ArrayList;
import java.util.List;

public class Main {
    // B1: tạo 1 hàm tìm kiếm có kiểu dữ liệu trả về là Boolean
    public static boolean searchIn2DArray(int[][] array, int target) {
        // B2: trong hàm tạo 1 mảng 2 chiều và gọi hàm getArr() để gán.
        int[][] arr = getArr();

        // B3: tạo 2 List có kiểu dữ liệu là int để lưu những vị trí số đó xuất hiện.
        List<Integer> rowPositions = new ArrayList<>();
        List<Integer> colPositions = new ArrayList<>();

        // B4: tạo biến check kiểu dữ liệu boolean, mặc định = false
        boolean check = false;

        // B5: sử dụng vòng lặp lồng nhau duyệt qua tất cả phần tử của mảng 2 chiều,
        // nếu có phần tử trùng ta sẽ add vị trí vào 2 list ở trên và đổi biến check = true.
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == target) {
                    rowPositions.add(i);
                    colPositions.add(j);
                    check = true;
                }
            }
        }

        // B6: in ra các vị trí và trả về biến check
        if (check) {
            System.out.println("Number found at positions:");
            for (int k = 0; k < rowPositions.size(); k++) {
                System.out.println("Row: " + rowPositions.get(k) + ", Column: " + colPositions.get(k));
            }
        } else {
            System.out.println("Number not found.");
        }

        return check;
    }

    // Hàm giả định trả về mảng 2 chiều, thay thế bằng logic thực tế của bạn
    public static int[][] getArr() {
        return new int[][] {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };
    }

    public static void main(String[] args) {
        // B2: gọi hàm tìm kiếm và trả về kết quả.
        boolean result = searchIn2DArray(getArr(), 5);

        // B3: in kết quả ra màn hình.
        System.out.println("Search result: " + result);
    }
}