import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        while (true){
            System.out.println("----------Menu----------");
            System.out.println("1.Hiển thị");
            System.out.println("2.Thêm");
            System.out.println("3.Sửa");
            System.out.println("4.Xoá");
            System.out.println("5. Thoát");
            System.out.print("Chọn chức năng: ");
            byte choice = new Scanner(System.in).nextByte();
        switch (choice){
            case 1:
                System.out.println(Arrays.toString(NumberManagement.arrayInt));
                break;
            case 2:
                int number = new Scanner(System.in).nextInt();
                NumberManagement.addInt(number);
                break;
            case 3:
                // Sửa thông tin
                NumberManagement.editByIdInt();
                break;
            case 4:
                // Xoá thông tin
                System.out.println("Nhập index cần xóa");
                int index = new Scanner(System.in).nextInt();
                NumberManagement.removeByIdInt(index);
                break;
            case 5:
                System.exit(0);
            default:
                System.out.println("Lựa chọn không hợp lệ!");
        }
        }
    }
}


