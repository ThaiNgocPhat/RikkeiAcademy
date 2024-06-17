package Exercise8;

import java.util.Scanner;

public class Employee {
    private String employeeId;
    private String employeeName;
    private int age;
    private String gen;
    private double rate;
    private double salary;

    // Constructor không tham số
    public Employee() {
    }

    // Constructor có tham số
    public Employee(String employeeId, String employeeName, int age, String gen, double rate) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.age = age;
        this.gen = gen;
        this.rate = rate;
        this.salary = 0.0;
    }

    // Phương thức inputData để nhập thông tin nhân viên
    public void inputData() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter Employee ID: ");
        employeeId = scanner.nextLine();
        System.out.print("Enter Employee Name: ");
        employeeName = scanner.nextLine();
        System.out.print("Enter Employee Age: ");
        age = Integer.parseInt(scanner.nextLine());
        System.out.print("Enter Employee Gender: ");
        gen = scanner.nextLine();
        System.out.print("Enter Employee Rate: ");
        rate = Double.parseDouble(scanner.nextLine());
    }

    // Phương thức displayData để hiển thị thông tin nhân viên
    public void displayData() {
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Employee Name: " + employeeName);
        System.out.println("Employee Age: " + age);
        System.out.println("Employee Gender: " + gen);
        System.out.println("Employee Rate: " + rate);
        System.out.println("Employee Salary: " + salary);
    }

    // Phương thức calSalary để tính lương nhân viên
    public void calSalary() {
        salary = rate * 1_300_000;
    }
}

