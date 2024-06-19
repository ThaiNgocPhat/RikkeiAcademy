import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // B1: Tạo chuỗi có giá trị là: “Rikkei Academy để nông dân biết code”
        String sentence = "Rikkei Academy để nông dân biết code";

        // B2: Tạo 1 list có các phần tử kiểu String
        List<String> stringList = new ArrayList<>();

        // B3: Convert chuỗi ở bước 1 thành các phần tử trong mảng rồi gán vào list được tạo ở bước 2
        String[] wordsArray = sentence.split(" ");
        stringList.addAll(Arrays.asList(wordsArray));

        // B4: Duyệt list trên và in ra các phần tử có nhiều hơn 3 ký tự
        System.out.println("Các chuỗi có độ dài lớn hơn 3 ký tự:");
        for (String word : stringList) {
            if (word.length() > 3) {
                System.out.println(word);
            }
        }
    }
}
