import java.util.Scanner;

public class NumberManagement {
    public static int[] arrayInt = new int[0];
    public static int size = 0;
    public static void displayInt(){
        System.out.println("Danh sách các số:");
        for(int i = 0; i < size; i++){
            System.out.print(arrayInt[i] + " ");
        }
        System.out.println();
    }
    public static void addInt(int number){
        //nếu mảng đầy nới rộng ra thêm
        if(size == arrayInt.length){
            int[] newArray = new int[size + 1];
            //copy mảng cũ qua mảng mới
            for (int i = 0; i < arrayInt.length; i++) {
                newArray[i] = arrayInt[i];
            }
            arrayInt = newArray;
        }
        arrayInt[size++] = number;
    }
    public static void editByIdInt(){
        System.out.println("Nhập id cần sửa: ");
        int id = new Scanner(System.in).nextInt();
        if(id == -1){
            System.out.println("không tìm thấy id");
        }
        System.out.println("Nhập giá trị mới: ");
        int number = new Scanner(System.in).nextInt();
        arrayInt[id] = number;
    }

    public static void removeByIdInt(int index){
        if (index<0 || index >= size){
            throw new ArrayIndexOutOfBoundsException("Không tìm thấy id cần xoá");
        }
        for (int i = index; i < size - 1; i++) {
            arrayInt[i] = arrayInt[i+1];
        }
        arrayInt[size - 1] = 0;
        size--;
    }
}
