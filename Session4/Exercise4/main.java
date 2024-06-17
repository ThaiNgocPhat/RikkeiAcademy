package Exercise4;

public class main {
    public static void main(String[] args) {
        // Tạo đối tượng Fan thứ nhất
        Fan fan1 = new Fan();
        fan1.setSpeed(fan1.FAST);
        fan1.setRadius(10);
        fan1.setColor("yellow");
        fan1.setOn(true);

        // Tạo đối tượng Fan thứ hai
        Fan fan2 = new Fan();
        fan2.setSpeed(fan2.MEDIUM);
        fan2.setRadius(5);
        fan2.setColor("blue");
        fan2.setOn(false);

        // In thông tin của các đối tượng Fan
        System.out.println(fan1.toString());
        System.out.println(fan2.toString());
    }
}
