public class Main {
    public static void main(String[] args) {
        // Bước 1: Tạo danh sách các học sinh
        Student[] students = {
                new Student(1, "Alice", 85.5),
                new Student(2, "Bob", 92.0),
                new Student(3, "Charlie", 78.3),
                new Student(4, "David", 88.7),
                new Student(5, "Eve", 95.2)
        };

        // Bước 2: Sắp xếp và in ra danh sách học sinh theo điểm số tăng dần
        System.out.println("Danh sách học sinh trước khi sắp xếp:");
        printStudents(students);

        Student[] sortedByInsertion = SortingStudent.insertionSort(students.clone());
        System.out.println("\nDanh sách học sinh sau khi sắp xếp bằng Insertion Sort:");
        printStudents(sortedByInsertion);

        Student[] sortedBySelection = SortingStudent.selectionSort(students.clone());
        System.out.println("\nDanh sách học sinh sau khi sắp xếp bằng Selection Sort:");
        printStudents(sortedBySelection);

        Student[] sortedByBubble = SortingStudent.bubbleSort(students.clone());
        System.out.println("\nDanh sách học sinh sau khi sắp xếp bằng Bubble Sort:");
        printStudents(sortedByBubble);
    }

    // Phương thức để in ra danh sách học sinh
    private static void printStudents(Student[] students) {
        for (Student student : students) {
            System.out.println(student);
        }
    }
}
