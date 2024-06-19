public class Main {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[3];
        shapes[0] = new Square(5.0);
        shapes[1] = new Circle(3.0);
        shapes[2] = new Rectangle(2.0, 3.0);

        // Duyệt qua từng phần tử trong mảng
        for (Shape shape : shapes) {
            System.out.println("Diện tích: " + shape.getArea());
            shape.printColorInfo();
        }
    }
}

abstract class Shape {
    abstract double getArea();

    void printColorInfo() {
        // Do nothing by default
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double getArea() {
        return width * height;
    }
}

class Square extends Shape {
    private double side;

    public Square(double side) {
        this.side = side;
    }

    @Override
    public double getArea() {
        return side * side;
    }

    @Override
    void printColorInfo() {
        System.out.println("Color all four sides.");
    }
}
