package rikkei.academy.business.designImpl;

import rikkei.academy.business.design.IGenericService;
import rikkei.academy.business.model.Catalog;
import rikkei.academy.business.model.Product;
import rikkei.academy.business.until.IOFile;

import java.util.*;

public class ProductService implements IGenericService<Product, String> {
    private List<Product> products = new ArrayList();
    private CatalogService catalogService;

    public ProductService(CatalogService catalogService) {
        this.catalogService = catalogService;
        loadDataFromFile();
    }

    private void loadDataFromFile() {
        this.products = IOFile.readFromFile(IOFile.PRODUCT_PATH);
    }

    public List<Product> findAll() {
        return this.products;
    }

    public void save(Product product) {
        int index = this.products.indexOf(product);
        if (index != -1) {
            this.products.set(index, product);
        } else {
            this.products.add(product);
        }

    }

    public Product findById(String id) {
        Iterator var2 = this.products.iterator();

        Product product;
        do {
            if (!var2.hasNext()) {
                return null;
            }

            product = (Product) var2.next();
        } while (!product.getProductId().equals(id));

        return product;
    }

    public void deleteById(String id) {
        Product product = this.findById(id);
        if (product != null) {
            this.products.remove(product);
        }

    }

    public void addProducts(int numProducts) {
        Scanner scanner = new Scanner(System.in);

        this.products = IOFile.readFromFile(IOFile.PRODUCT_PATH);

        for (int i = 0; i < numProducts; ++i) {
            Product product = new Product();

            String productId;
            do {
                System.out.print("Mời bạn nhập ID sản phẩm (bắt đầu bằng chữ P và thêm 4 ký tự số): ");
                productId = scanner.nextLine();
                if (this.findById(productId) != null) {
                    System.out.println("Mã sản phẩm đã tồn tại. Vui lòng nhập lại.");
                }
            } while (!productId.matches("P\\d{4}") || this.findById(productId) != null);

            product.setProductId(productId);

            String productName;
            do {
                System.out.print("Mời bạn nhập tên sản phẩm (Không được để trống): ");
                productName = scanner.nextLine();
            } while (productName.isEmpty());

            product.setProductName(productName);

            double productPrice;
            do {
                System.out.print("Mời bạn nhập giá (phải lớn hơn 0): ");
                productPrice = scanner.nextDouble();
                scanner.nextLine();
            } while (productPrice <= 0.0);

            product.setProductPrice(productPrice);

            int stock;
            do {
                System.out.print("Mời bạn nhập số lượng sản phẩm (ít nhất là 1): ");
                stock = scanner.nextInt();
                scanner.nextLine();
            } while (stock < 1);

            product.setStock(stock);
            System.out.print("Mời bạn nhập mô tả sản phẩm: ");
            product.setDescription(scanner.nextLine());
            Catalog catalog = null;

            while (catalog == null) {
                System.out.print("Mời bạn nhập tên danh mục mà bạn muốn bỏ sản phẩm vào (không được để null):");
                String catalogName = scanner.nextLine();
                catalog = this.catalogService.getCatalogByName(catalogName);
                if (catalog == null) {
                    System.out.println("Không tìm thấy danh mục. Tạo mới danh mục.");
                    Catalog newCatalog = new Catalog();
                    newCatalog.setCatalogName(catalogName);

                    int catalogId;
                    do {
                        System.out.print("Mời bạn nhập ID danh mục (Chỉ được nhập số): ");
                        catalogId = scanner.nextInt();
                        scanner.nextLine();
                        if (this.catalogService.findById(catalogId) != null) {
                            System.out.println("ID danh mục đã tồn tại. Vui lòng nhập lại.");
                        }
                    } while (this.catalogService.findById(catalogId) != null);
                    newCatalog.setCatalogId(catalogId);

                    System.out.print("Mời bạn nhập mô tả danh mục (không được để trống):");
                    newCatalog.setDescriptions(scanner.nextLine());

                    this.catalogService.save(newCatalog);
                    catalog = newCatalog;
                }
            }

            product.setCatalog(catalog);
            catalog.getProducts().add(product);
            System.out.print("Mời bạn nhập trạng thái sản phẩm (true/false): ");
            product.setStatus(scanner.nextBoolean());
            scanner.nextLine();
            this.save(product);
            System.out.println("Thêm sản phẩm thành công!");
        }

        IOFile.writeToFile(IOFile.PRODUCT_PATH, this.products);
        IOFile.writeToFile(IOFile.CATALOG_PATH, this.catalogService.findAll());
    }

    public void displayAllProducts() {
        List<Product> allProducts = IOFile.readFromFile(IOFile.PRODUCT_PATH);
        if (allProducts.isEmpty()) {
            System.out.println("Không có sản phẩm nào trong danh sách.");
        } else {
            Iterator var2 = allProducts.iterator();

            while (var2.hasNext()) {
                Product product = (Product) var2.next();
                System.out.println(product);
            }
        }
    }

    public void sortProductsByPrice() {
        this.products = IOFile.readFromFile(IOFile.PRODUCT_PATH);
        Collections.sort(this.products, Comparator.comparingDouble(Product::getProductPrice).reversed());
        System.out.println("Đã sắp xếp xong.");
        IOFile.writeToFile(IOFile.PRODUCT_PATH, this.products);
    }

    public void deleteProduct(String id) {
        IOFile.readFromFile(IOFile.PRODUCT_PATH);
        Product product = this.findById(id);
        if (product != null) {
            this.deleteById(id);
            System.out.println("Sản phẩm có ID là " + id + " đã bị xóa.");
        } else {
            System.out.println("không tìm thấy sản phẩm có ID là " + id + ".");
        }
        IOFile.writeToFile(IOFile.PRODUCT_PATH, this.products);
    }

    public void searchProductByName(String name) {
        Iterator var2 = this.findAll().iterator();

        while (var2.hasNext()) {
            Product product = (Product) var2.next();
            if (product.getProductName().equals(name)) {
                System.out.println(product);
            }
        }

    }

    public void editProduct(String id, String newName, double newPrice, String newDescription, int newStock, Catalog newCatalog, boolean newStatus) {
        Product product = this.findById(id);
        if (product != null) {
            product.setProductName(newName);
            product.setProductPrice(newPrice);
            product.setDescription(newDescription);
            product.setStock(newStock);
            product.setCatalog(newCatalog);
            product.setStatus(newStatus);
            this.save(product);
        }
    }

    public Product getProductById(String productId) {
        Iterator var2 = this.products.iterator();

        Product product;
        do {
            if (!var2.hasNext()) {
                return null;
            }

            product = (Product) var2.next();
        } while (!product.getProductId().equals(productId));

        return product;
    }

    public Product getProductByName(String productName) {
        Iterator var2 = this.products.iterator();

        Product product;
        do {
            if (!var2.hasNext()) {
                return null;
            }

            product = (Product) var2.next();
        } while (!product.getProductName().equals(productName));

        return product;
    }

    //tìm kiếm theo tên và danh mục
    public void searchProductByNameAndCatalog(String name, String catalogName) {
        Iterator<Product> iterator = this.products.iterator();
        boolean found = false;

        while (iterator.hasNext()) {
            Product product = iterator.next();
            boolean nameMatches = name == null || product.getProductName().toLowerCase().contains(name.toLowerCase());
            boolean catalogMatches = catalogName == null || product.getCatalog().getCatalogName().toLowerCase().contains(catalogName.toLowerCase());

            if (nameMatches && catalogMatches) {
                System.out.println("Đây có phải thứ bạn muốn tìm:");
                System.out.println( product);
                found = true;
            }
        }

        if (!found) {
            System.out.println("Không tìm thấy sản phẩm nào khớp với tên sản phẩm và tên danh mục đã nhập.");
        }
    }
}

