package ra.entity;

import java.util.Scanner;

public class Product {
    private String productId, productName, description;
    private float importPrice;
    private float exportPrice;
    private int quantity;
    private boolean status;

    public Product() {
    }

    public Product(String productId, String productName, String description, float importPrice, float exportPrice, int quantity, boolean status) {
        this.productId = productId;
        this.productName = productName;
        this.description = description;
        this.importPrice = importPrice;
        this.exportPrice = exportPrice;
        this.quantity = quantity;
        this.status = status;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getImportPrice() {
        return importPrice;
    }

    public void setImportPrice(float importPrice) {
        this.importPrice = importPrice;
    }

    public float getExportPrice() {
        return exportPrice;
    }

    public void setExportPrice(float exportPrice) {
        this.exportPrice = exportPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public static void inputData(Scanner sc, Product[] products, int index){
        System.out.println("Nhập mã sản phẩm: ");
        String productId;
        while (true){
            productId = sc.nextLine();
            String regex = "^P\\w{3}$";
            if (productId.matches(regex)){
                break;
            }else {
                System.out.println("Mã sản phẩm không đúng định dạng (Pxxx)");
            }
        }

        System.out.println("Nhập tên sản phẩm: ");
        String productName;
        while(true){
            productName = sc.nextLine();
            if (productName.length() >= 6 && productName.length() <= 50){
                break;
            }else{
                System.out.println("Tên sản phẩm phải từ 6 đến 50 ký tự");
            }
        }

        System.out.println("Nhập giá nhập: ");
        float importPrice;
        while (true){
            importPrice = Float.parseFloat(sc.nextLine());
            if (importPrice > 0){
                break;
            }else {
                System.out.println("Giá tiền phải lớn hơn 0");
            }
        }

        System.out.println("Nhập giá xuất (ít nhất cao hơn giá nhập 20%): ");
        float exportPrice;
        while (true){
            exportPrice = Float.parseFloat(sc.nextLine());
            if (exportPrice > importPrice * 1.2){
                break;
            }else{
                System.out.println("Giá xuất không hợp lệ");
            }
        }

        System.out.println("Nhập số lượng: ");
        int quantity;
        while(true){
            quantity = sc.nextInt();
            sc.nextLine();
            if (quantity > 0){
                break;
            }else {
                System.out.println("Số lượng phải lớn hơn 0");
            }
        }

        System.out.println("Nhập mô tả sản phẩm: ");
        String description = sc.nextLine();

        System.out.println("Nhập trạng thái sản phẩm (true hoặc false): ");
        boolean status;
        while (true) {
            status = Boolean.parseBoolean(sc.nextLine());
            if (status == true || status == false) {
                break;
            } else {
                System.out.println("Trạng thái không hợp lệ.");
            }
        }

        products[index] = new Product(productId, productName, description, importPrice, exportPrice, quantity, status);
    }

    public float profit(){
        return exportPrice - importPrice;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId='" + productId + '\'' +
                ", productName='" + productName + '\'' +
                ", description='" + description + '\'' +
                ", importPrice=" + importPrice +
                ", exportPrice=" + exportPrice +
                ", quantity=" + quantity +
                ", status=" + status +
                '}';
    }
}
