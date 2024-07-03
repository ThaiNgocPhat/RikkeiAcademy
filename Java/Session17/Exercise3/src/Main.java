public class Main {
    public static void main(String[] args) {
        // Tạo một mảng Object chứa các phần tử có thể là số nguyên hoặc không phải số nguyên
        Object[] array = {1, 2, "three", 4, 5, "six"};

        // Gọi hàm tính tổng
        int sum = calculateSum(array);
        System.out.println("Tổng của mảng: " + sum);
    }

    public static int calculateSum(Object[] array) {
        int sum = 0;

        for (Object element : array) {
            try {
                // Thử chuyển phần tử sang kiểu Integer
                int number = (int) element;
                sum += number;
            } catch (ClassCastException e) {
                // Nếu phần tử không phải là số nguyên, hiển thị thông báo lỗi
                System.out.println("Phần tử '" + element + "' không phải là số nguyên. Bỏ qua phần tử này.");
            }
        }

        return sum;
    }
}
