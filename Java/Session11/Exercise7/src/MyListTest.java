public class MyListTest {
    public static void main(String[] args) {
        MyList<Integer> myList = new MyList<>();
        myList.add(0, 42);
        myList.add(1, 99);
        System.out.println("Size: " + myList.size());
        System.out.println("Contains 99? " + myList.contains(99));
        System.out.println("Index of 42: " + myList.indexOf(42));
    }
}