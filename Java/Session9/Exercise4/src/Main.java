import Rikkei.Academy.Circle;
import Rikkei.Academy.Rectangle;

public class Main {
    public static void main(String[] args) {
        // Tạo đối tượng Rectangle
        Rectangle rectangle = new Rectangle("Red", 5, 7);
        rectangle.display();
        System.out.println("Diện tích hình chữ nhật: " + rectangle.getArea());

        // Tạo đối tượng Circle
        Circle circle = new Circle("Blue", 3);
        circle.display();
        System.out.println("Diện tích hình tròn: " + circle.getArea());
    }
}