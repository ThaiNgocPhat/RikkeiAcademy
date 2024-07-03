import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        // Bước 2: Tạo danh sách các đội bóng và thêm các đội bóng vào
        List<FootballTeam> teams = new ArrayList<>();
        teams.add(new FootballTeam(1, "Team A", 20, 80));
        teams.add(new FootballTeam(2, "Team B", 22, 75));
        teams.add(new FootballTeam(3, "Team C", 18, 85));
        teams.add(new FootballTeam(4, "Team D", 19, 78));
        teams.add(new FootballTeam(5, "Team E", 21, 82));

        // Bước 3: Gọi các hàm sắp xếp và truyền danh sách đội bóng vào để sắp xếp
        System.out.println("Danh sách đội bóng trước khi sắp xếp:");
        printTeams(teams);

        Sorting.bubbleSort(teams);
        //Sorting.selectionSort(teams);
        //Sorting.insertionSort(teams);

        System.out.println("\nDanh sách đội bóng sau khi sắp xếp theo số điểm từ cao đến thấp:");
        printTeams(teams);
    }

    // Phương thức in danh sách đội bóng
    public static void printTeams(List<FootballTeam> teams) {
        for (FootballTeam team : teams) {
            System.out.println(team);
        }
    }
}
