import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Date;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String regex = "^[CSA][0-9]{3}$";
        while (true) {
            System.out.println("Nhập mã sản phẩm: ");
            String index = scanner.nextLine();
            if (index.matches(regex)) {
                System.out.println("Mã hợp lệ: " + index);
                break;
            } else {
                System.out.println("Nhập mã không hợp lệ, vui lòng nhập lại.");
            }
        }
        while (true){
            System.out.println("Nhập tên: ");
            String name = scanner.nextLine();
            String regex1 = "^[a-zA-Z]{10,50}$";
            if (name.matches(regex1)){
                System.out.println("Tên sản phẩm hợp lệ ");
                break;
            }else {
                System.out.println("Không hợp lệ,tên từ 10 đến 50 ký tự");
            }
        }
        while (true){
            System.out.println("Nhập giá: ");
            double price = Double.parseDouble(scanner.nextLine());
            if (price > 0){
                System.out.println("Giá hợp lệ " + price);
                break;
            }else{
                System.out.println("Giá phải lớn hơn không");
            }
        }
        while (true){
            try{
                System.out.println("Nhập ngày nhập sản phẩm(dd/MM/yyyy)");
                String dateFormat = scanner.nextLine();
                DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
                LocalDate date = LocalDate.parse(dateFormat, dateTimeFormatter);
                break;
            }catch(DateTimeParseException e){
                System.out.println("Định dạng ngày sai");
            }
        }
        while(true){
            System.out.println("Nhập trạng thái sản phẩm(0:Đang bán, 1:Hết hàng,2:Không bán)");
            int number = Integer.parseInt(scanner.nextLine());
            if (number == 0 || number == 1 || number == 2){
                System.out.println("Trạng thái hợp lệ " + number);
                break;
            }else {
                System.out.println("Trạng thái không hợp lệ");
            }
        }
    }
}
