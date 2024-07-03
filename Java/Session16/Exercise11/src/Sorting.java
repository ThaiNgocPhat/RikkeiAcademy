import java.util.List;

public class Sorting {

    // Sắp xếp bằng Bubble Sort
    public static void bubbleSort(List<FootballTeam> teams) {
        int n = teams.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (teams.get(j).getScore() < teams.get(j + 1).getScore()) {
                    // Hoán đổi vị trí hai đội bóng
                    FootballTeam temp = teams.get(j);
                    teams.set(j, teams.get(j + 1));
                    teams.set(j + 1, temp);
                }
            }
        }
    }

    // Sắp xếp bằng Selection Sort
    public static void selectionSort(List<FootballTeam> teams) {
        int n = teams.size();
        for (int i = 0; i < n - 1; i++) {
            int maxIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (teams.get(j).getScore() > teams.get(maxIndex).getScore()) {
                    maxIndex = j;
                }
            }
            // Hoán đổi vị trí hai đội bóng
            FootballTeam temp = teams.get(maxIndex);
            teams.set(maxIndex, teams.get(i));
            teams.set(i, temp);
        }
    }

    // Sắp xếp bằng Insertion Sort
    public static void insertionSort(List<FootballTeam> teams) {
        int n = teams.size();
        for (int i = 1; i < n; ++i) {
            FootballTeam key = teams.get(i);
            int j = i - 1;

            // Di chuyển các phần tử lớn hơn key đến vị trí trước đó của nó
            while (j >= 0 && teams.get(j).getScore() < key.getScore()) {
                teams.set(j + 1, teams.get(j));
                j = j - 1;
            }
            teams.set(j + 1, key);
        }
    }
}
