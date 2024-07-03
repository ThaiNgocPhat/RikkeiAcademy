import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class StudentManagement {
    private List<Student> students;

    // Constructor
    public StudentManagement() {
        students = new ArrayList<>();
    }

    // Phương thức show all hiển thị tất cả student trong chương trình
    public void showAll() {
        if (students.isEmpty()) {
            System.out.println("Danh sách sinh viên trống.");
        } else {
            for (Student student : students) {
                System.out.println(student);
            }
        }   
    }

    // Phương thức addStudent để thêm một sinh viên vào danh sách sinh viên
    public void addStudent(Student student) {
        students.add(student);
        System.out.println("Đã thêm sinh viên: " + student);
    }

    // Phương thức removeStudent để xóa sinh viên có mã số sinh viên là studentId
    public void removeStudent(int studentId) {
        Student studentToRemove = findStudentById(studentId);
        if (studentToRemove != null) {
            students.remove(studentToRemove);
            System.out.println("Đã xóa sinh viên: " + studentToRemove);
        } else {
            System.out.println("Không tìm thấy sinh viên với mã số: " + studentId);
        }
    }

    // Phương thức findStudentById để tìm kiếm sinh viên có mã số sinh viên là studentId
    public Student findStudentById(int studentId) {
        for (Student student : students) {
            if (student.getStudentId() == studentId) {
                return student;
            }
        }
        System.out.println("Không tìm thấy sinh viên với mã số: " + studentId);
        return null;
    }

    // Phương thức getAverageScore tính và trả về điểm trung bình của tất cả student
    public double getAverageScore() {
        if (students.isEmpty()) {
            return 0;
        }

        double totalScore = 0;
        for (Student student : students) {
            totalScore += student.getAverageScore();
        }

        return totalScore / students.size();
    }

    // Phương thức sortByScore sắp xếp sinh viên theo điểm tăng dần
    public void sortByScore() {
        students.sort(Comparator.comparingDouble(Student::getAverageScore));
        System.out.println("Đã sắp xếp sinh viên theo điểm tăng dần.");
    }

    // Main method for testing
    public static void main(String[] args) {
        StudentManagement management = new StudentManagement();

        // Thêm một số sinh viên vào danh sách
        management.addStudent(new Student(1, "Nguyen Van A", 8.5));
        management.addStudent(new Student(2, "Tran Thi B", 9.0));
        management.addStudent(new Student(3, "Le Van C", 7.0));

        // Hiển thị tất cả sinh viên
        System.out.println("Danh sách sinh viên:");
        management.showAll();

        // Tìm kiếm sinh viên theo mã số
        System.out.println("Tìm kiếm sinh viên với mã số 2:");
        Student foundStudent = management.findStudentById(2);
        System.out.println(foundStudent != null ? foundStudent : "Không tìm thấy sinh viên");

        // Xóa sinh viên
        System.out.println("Xóa sinh viên với mã số 1:");
        management.removeStudent(1);

        // Hiển thị tất cả sinh viên sau khi xóa
        System.out.println("Danh sách sinh viên sau khi xóa:");
        management.showAll();

        // Tính điểm trung bình của tất cả sinh viên
        System.out.println("Điểm trung bình của tất cả sinh viên: " + management.getAverageScore());

        // Sắp xếp sinh viên theo điểm tăng dần
        management.sortByScore();

        // Hiển thị tất cả sinh viên sau khi sắp xếp
        System.out.println("Danh sách sinh viên sau khi sắp xếp:");
        management.showAll();
    }
}
