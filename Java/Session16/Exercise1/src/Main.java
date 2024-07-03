import java.util.Scanner;
public class Main {
        //B1: tạo 1 mảng số nguyên và gọi hàm getArr() để gán
        private static int[] getArr(){
            int arr[] = new int[20];
            for (int i = 0; i < arr.length; i++) {
                arr[i] = (int) (Math.random() * 100);
            }
            return arr;
        }
        //B2: in ra mảng số nguyên đó
        private static void printArr(int[] arr){
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i] + " ");
            }
        }
        //B3: cài đặt thuật toán tuyến tính để tìm ra số lớn nhất
        private static int findMax(int[] arr){
            int max = arr[0];
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        }
        //B4: in số lớn nhất ra.
    public static void main(String[] args) {
            int[] arr = getArr();
            printArr(arr);
            System.out.println();
            System.out.println("Số lớn nhất trong mảng là: " + findMax(arr));
    }
    }
