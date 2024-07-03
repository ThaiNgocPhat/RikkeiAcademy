public class MyList<E> {
    private int size = 0;
    private static final int DEFAULT_CAPACITY = 10;
    private Object elements[];

    public MyList() {
        elements = new Object[DEFAULT_CAPACITY];
    }

    public MyList(int capacity) {
        elements = new Object[capacity];
    }

    public void add(int index, E element) {
        // Implement your logic here
    }

    public E remove(int index) {
        // Implement your logic here
        return null;
    }

    public int size() {
        return size;
    }

    public boolean contains(E o) {
        // Implement your logic here
        return false;
    }

    public int indexOf(E o) {
        // Implement your logic here
        return -1;
    }

    public void add(E e) {
        // Implement your logic here
    }

    public void ensureCapacity(int minCapacity) {
        // Implement your logic here
    }
}