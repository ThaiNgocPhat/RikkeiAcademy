import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Nhập chuỗi từ người dùng
        System.out.print("Nhập chuỗi: ");
        String input = scanner.nextLine();

        // Tìm chuỗi con dài nhất
        String longestSubsequence = findLongestSubsequence(input);

        // Sắp xếp chuỗi con dài nhất
        String sortedSubsequence = sortString(longestSubsequence);

        // Hiển thị chuỗi con được sắp xếp
        System.out.println("Chuỗi con dài nhất được sắp xếp: " + sortedSubsequence);

        scanner.close();
    }

    // Hàm tìm chuỗi con dài nhất từ chuỗi ban đầu
    public static String findLongestSubsequence(String input) {
        int n = input.length();
        String longestSubsequence = "";

        for (int start = 0; start < n; start++) {
            for (int end = start + 1; end <= n; end++) {
                String subsequence = input.substring(start, end);
                if (subsequence.length() > longestSubsequence.length()) {
                    longestSubsequence = subsequence;
                }
            }
        }

        return longestSubsequence;
    }

    // Hàm sắp xếp chuỗi theo thứ tự từ bé đến lớn
    public static String sortString(String input) {
        char[] chars = input.toCharArray();
        java.util.Arrays.sort(chars);
        return new String(chars);
    }
}
