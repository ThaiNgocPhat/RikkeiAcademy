import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // B1: Tạo sẵn 1 chuỗi là một câu hoặc một đoạn văn
        String paragraph = "Rikkei Academy là nơi để nông dân biết code và trở thành lập trình viên chuyên nghiệp";

        // B2: Convert từng từ trong chuỗi đó thành các phần tử trong list
        List<String> wordList = new ArrayList<>(Arrays.asList(paragraph.split(" ")));

        // B3: Tạo thêm một newList để lưu trữ những phần tử ngắn nhất
        List<String> newList = new ArrayList<>();

        // Tìm độ dài ngắn nhất của các từ trong danh sách
        int minLength = Integer.MAX_VALUE;
        for (String word : wordList) {
            if (word.length() < minLength) {
                minLength = word.length();
            }
        }

        // Lưu trữ những từ có độ dài bằng với độ dài ngắn nhất vào newList
        for (String word : wordList) {
            if (word.length() == minLength) {
                newList.add(word);
            }
        }

        // B4: Duyệt newList để in ra kết quả những từ có độ dài ngắn nhất
        System.out.println("Những từ có độ dài ngắn nhất:");
        for (String word : newList) {
            System.out.println(word);
        }
    }
}
