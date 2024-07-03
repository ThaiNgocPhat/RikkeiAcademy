import java.util.Scanner;
import java.util.InputMismatchException;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number1 = 0;
        int number2 = 0;
        boolean validInput = false;

        while (!validInput) {
            System.out.print("Nhập số thứ nhất: ");
            try {
                number1 = scanner.nextInt();
                validInput = true;
            } catch (InputMismatchException e) {
                System.out.println("Giá trị không hợp lệ. Vui lòng nhập lại.");
                scanner.next();
            }
        }

        validInput = false;

        // Nhập số thứ hai
        while (!validInput) {
            System.out.print("Nhập số thứ hai: ");
            try {
                number2 = scanner.nextInt();
                validInput = true;
            } catch (InputMismatchException e) {
                System.out.println("Giá trị không hợp lệ. Vui lòng nhập lại.");
                scanner.next();
            }
        }


        int sum = number1 + number2;
        System.out.println("Tổng của hai số là: " + sum);
        
        scanner.close();
    }
}
