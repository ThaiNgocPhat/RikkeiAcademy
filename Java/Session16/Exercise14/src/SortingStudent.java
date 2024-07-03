public class SortingStudent {

    // Phương thức sắp xếp chèn (Insertion Sort) theo điểm số tăng dần
    public static Student[] insertionSort(Student[] students) {
        int n = students.length;
        for (int i = 1; i < n; ++i) {
            Student key = students[i];
            int j = i - 1;

            while (j >= 0 && students[j].getScore() > key.getScore()) {
                students[j + 1] = students[j];
                j = j - 1;
            }
            students[j + 1] = key;
        }
        return students;
    }

    // Phương thức sắp xếp chọn (Selection Sort) theo điểm số tăng dần
    public static Student[] selectionSort(Student[] students) {
        int n = students.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (students[j].getScore() < students[minIndex].getScore()) {
                    minIndex = j;
                }
            }
            // Hoán đổi vị trí hai phần tử
            Student temp = students[minIndex];
            students[minIndex] = students[i];
            students[i] = temp;
        }
        return students;
    }

    // Phương thức sắp xếp nổi bọt (Bubble Sort) theo điểm số tăng dần
    public static Student[] bubbleSort(Student[] students) {
        int n = students.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (students[j].getScore() > students[j + 1].getScore()) {
                    // Hoán đổi vị trí hai phần tử
                    Student temp = students[j];
                    students[j] = students[j + 1];
                    students[j + 1] = temp;
                }
            }
        }
        return students;
    }
}
