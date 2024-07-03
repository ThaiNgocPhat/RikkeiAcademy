import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            // Bước 1: Nhập vào ngày, tháng, năm
            System.out.print("Nhập ngày: ");
            int day = scanner.nextInt();
            System.out.print("Nhập tháng: ");
            int month = scanner.nextInt();
            System.out.print("Nhập năm: ");
            int year = scanner.nextInt();

            // Bước 2: Kiểm tra tính hợp lệ của ngày tháng năm
            if (isValidDate(day, month, year)) {
                System.out.println("Ngày tháng năm hợp lệ.");
            } else {
                throw new Exception("Ngày tháng năm không hợp lệ.");
            }
        } catch (Exception e) {
            System.out.println("Lỗi: " + e.getMessage());
        } finally {
            // Đóng Scanner
            scanner.close();
        }
    }

    // Hàm kiểm tra tính hợp lệ của ngày tháng năm
    public static boolean isValidDate(int day, int month, int year) {
        // Kiểm tra năm phải lớn hơn 0
        if (year <= 0) {
            return false;
        }

        // Kiểm tra tháng phải từ 1 đến 12
        if (month < 1 || month > 12) {
            return false;
        }

        // Kiểm tra số ngày trong tháng
        int maxDays = getDaysInMonth(month, year);
        if (day < 1 || day > maxDays) {
            return false;
        }

        return true;
    }

    // Hàm lấy số ngày trong tháng
    public static int getDaysInMonth(int month, int year) {
        switch (month) {
            case 1:  // Tháng 1: 31 ngày
            case 3:  // Tháng 3: 31 ngày
            case 5:  // Tháng 5: 31 ngày
            case 7:  // Tháng 7: 31 ngày
            case 8:  // Tháng 8: 31 ngày
            case 10: // Tháng 10: 31 ngày
            case 12: // Tháng 12: 31 ngày
                return 31;
            case 4:  // Tháng 4: 30 ngày
            case 6:  // Tháng 6: 30 ngày
            case 9:  // Tháng 9: 30 ngày
            case 11: // Tháng 11: 30 ngày
                return 30;
            case 2:  // Tháng 2: kiểm tra năm nhuận
                if (isLeapYear(year)) {
                    return 29;
                } else {
                    return 28;
                }
            default:
                return -1; // Nếu tháng không hợp lệ
        }
    }

    // Hàm kiểm tra năm nhuận
    public static boolean isLeapYear(int year) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    }
}
