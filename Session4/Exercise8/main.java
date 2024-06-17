package Exercise8;

public class main {
    public static void main(String[] args) {
        Employee[] employees = new Employee[2];

        for (int i = 0; i < employees.length; i++) {
            System.out.println("\nNhập thông tin cho nhân viên " + (i + 1) + ":");
            employees[i] = new Employee();
            employees[i].inputData();
            employees[i].calSalary();
        }

        System.out.println("\nThông tin các nhân viên:");
        for (Employee employee : employees) {
            employee.displayData();
            System.out.println();
        }
    }
}
