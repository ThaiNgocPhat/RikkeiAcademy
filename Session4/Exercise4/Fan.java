package Exercise4;

public class Fan {
    // Hằng số tốc độ quạt
    int SLOW = 1;
    int MEDIUM = 2;
    int FAST = 3;

    // Các trường dữ liệu của Fan
    private int speed;
    private boolean on;
    private double radius;
    private String color;

    // Constructor không tham số
    public Fan() {
        this.speed = SLOW;
        this.on = false;
        this.radius = 5.0;
        this.color = "blue";
    }

    // Getter và Setter cho speed
    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    // Getter và Setter cho on
    public boolean isOn() {
        return on;
    }

    public void setOn(boolean on) {
        this.on = on;
    }

    // Getter và Setter cho radius
    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    // Getter và Setter cho color
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    // Phương thức toString
    @Override
    public String toString() {
        if (on) {
            return "Fan is on: speed=" + speed + ", color=" + color + ", radius=" + radius;
        } else {
            return "Fan is off: color=" + color + ", radius=" + radius;
        }
    }
}

