package ra.businessImp;


import ra.businees.IProduct;

import java.util.Date;
import java.util.Scanner;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Product implements IProduct {
    private String proId;
    private String proName;
    private String producer;
    private int makingDate;
    private Date expireDate;
    private double price;
    private Status status;

    public enum Status {
        HIDE, SHOW
    }

    public Product() {}

    public Product(String proId, String proName, String producer, int makingDate, Date expireDate, double price, Status status) {
        this.proId = proId;
        this.proName = proName;
        this.producer = producer;
        this.makingDate = makingDate;
        this.expireDate = expireDate;
        this.price = price;
        this.status = status;
    }

    // Getters and Setters

    public String getProId() {
        return proId;
    }

    public void setProId(String proId) {
        this.proId = proId;
    }

    public String getProName() {
        return proName;
    }

    public void setProName(String proName) {
        this.proName = proName;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public int getMakingDate() {
        return makingDate;
    }

    public void setMakingDate(int makingDate) {
        this.makingDate = makingDate;
    }

    public Date getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Date expireDate) {
        this.expireDate = expireDate;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public void inputData() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter product ID (must start with 'P' and have 4 characters): ");
        while (true) {
            this.proId = sc.nextLine();
            if (this.proId.length() == 4 && this.proId.startsWith("P")) {
                break;
            }
            System.out.println("Invalid product ID. Try again: ");
        }

        System.out.println("Enter product name (minimum 5 characters): ");
        while (true) {
            this.proName = sc.nextLine();
            if (this.proName.length() >= 5) {
                break;
            }
            System.out.println("Invalid product name. Try again: ");
        }

        System.out.println("Enter producer (minimum 10 characters): ");
        while (true) {
            this.producer = sc.nextLine();
            if (this.producer.length() >= 10) {
                break;
            }
            System.out.println("Invalid producer name. Try again: ");
        }

        System.out.println("Enter making date (as an integer): ");
        while (true) {
            this.makingDate = sc.nextInt();
            Date currentDate = new Date();
            if (this.makingDate < currentDate.getTime()) {
                break;
            }
            System.out.println("Invalid making date. Must be before current date. Try again: ");
        }

        System.out.println("Enter expire date (yyyy-MM-dd): ");
        while (true) {
            String dateString = sc.next();
            try {
                this.expireDate = new SimpleDateFormat("yyyy-MM-dd").parse(dateString);
                if (this.expireDate.after(new Date(this.makingDate))) {
                    break;
                }
            } catch (ParseException e) {
                System.out.println("Invalid date format. Try again: ");
            }
            System.out.println("Invalid expire date. Must be after making date. Try again: ");
        }

        System.out.println("Enter price (must be >= 0): ");
        while (true) {
            this.price = sc.nextDouble();
            if (this.price >= 0) {
                break;
            }
            System.out.println("Invalid price. Must be >= 0. Try again: ");
        }

        this.status = Status.SHOW; // default status
    }

    @Override
    public void displayData() {
        System.out.println("Product ID: " + this.proId);
        System.out.println("Product Name: " + this.proName);
        System.out.println("Producer: " + this.producer);
        System.out.println("Making Date: " + this.makingDate);
        System.out.println("Expire Date: " + this.expireDate);
        System.out.println("Price: " + this.price);
        System.out.println("Status: " + this.status);
    }
}
