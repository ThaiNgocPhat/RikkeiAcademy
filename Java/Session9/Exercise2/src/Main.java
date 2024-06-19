public class Main {
    public static void main(String[] args) {
        Object[] shapes = new Object[3];
        shapes[0] = new Square(5.0);
        shapes[1] = new Circle(3.0); // Giả sử có lớp Circle
        shapes[2] = new Rectangle(2.0, 3.0); // Giả sử có lớp Rectangle

        for (Object shape : shapes) {
            if (shape instanceof Square) {
                Square square = (Square) shape;
                System.out.println("Diện tích hình vuông: " + square.getArea());
                if (shape instanceof Colorable) {
                    ((Colorable) shape).howToColor();
                }
            } else if (shape instanceof Circle) {
                Circle circle = (Circle) shape;
                System.out.println("Diện tích hình tròn: " + circle.getArea());
            } else if (shape instanceof Rectangle) {
                Rectangle rectangle = (Rectangle) shape;
                System.out.println("Diện tích hình chữ nhật: " + rectangle.getArea());
            }
        }
    }
}

class Circle {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double getArea() {
        return width * height;
    }
}
