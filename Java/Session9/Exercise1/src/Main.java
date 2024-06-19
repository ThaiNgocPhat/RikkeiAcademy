//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Circle c1 = new Circle(3);
        System.out.println(c1.area());
        c1.resize(3);
        System.out.println(c1.area());
    }
}