package rikkei.academy.business.designImpl;

import rikkei.academy.business.design.IGenericService;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

import rikkei.academy.business.model.Catalog;
import rikkei.academy.business.model.Product;
import rikkei.academy.business.until.IOFile;

public class CatalogService implements IGenericService<Catalog, Integer> {
    private List<Catalog> catalogs = new ArrayList();

    public CatalogService() {
        catalogs = IOFile.readFromFile(IOFile.CATALOG_PATH);
    }

    public List<Catalog> findAll() {
        return this.catalogs;
    }

    public void save(Catalog catalog) {
        int index = this.catalogs.indexOf(catalog);
        if (index != -1) {
            this.catalogs.set(index, catalog);
        } else {
            this.catalogs.add(catalog);
        }

    }

    public Catalog findById(Integer id) {
        Iterator var2 = this.catalogs.iterator();

        Catalog catalog;
        do {
            if (!var2.hasNext()) {
                return null;
            }

            catalog = (Catalog) var2.next();
        } while (catalog.getCatalogId() != id);

        return catalog;
    }

    public void deleteById(Integer id) {
        Catalog catalog = this.findById(id);
        if (catalog != null) {
            if (catalog.getProducts().isEmpty()) {
                this.catalogs.remove(catalog);
            } else {
                System.out.println("Không thể xóa danh mục có id là " + id + " vì nó có sản phẩm liên quan.");
            }
        } else {
            System.out.println("Không tìm thấy danh mục " + id + " để xóa.");
        }

    }

    public Catalog getCatalogByName(String name) {
        if (name == null || catalogs == null) {
            return null;
        }

        Iterator var2 = this.catalogs.iterator();

        Catalog catalog;
        do {
            if (!var2.hasNext()) {
                return null;
            }

            catalog = (Catalog) var2.next();
        } while (catalog.getCatalogName() == null || !catalog.getCatalogName().equals(name));

        return catalog;
    }

    public void addCatalogs(int numCatalogs) {
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < numCatalogs; ++i) {
            Catalog catalog = new Catalog();
            int catalogId;
            do {
                System.out.print("Mời bạn nhập mã danh mục (Chỉ được nhập số): ");
                catalogId = scanner.nextInt();
                scanner.nextLine();
                if (findById(catalogId) != null) {
                    System.out.println("Mã danh mục đã tồn tại. Vui lòng nhập lại.");
                }
            } while (findById(catalogId) != null);
            catalog.setCatalogId(catalogId);

            String catalogName;
            do {
                System.out.print("Mời bạn thêm tên danh mục (Không được để trống): ");
                catalogName = scanner.nextLine();
            } while (catalogName.isEmpty());

            catalog.setCatalogName(catalogName);

            String descriptions;
            do {
                System.out.print("Mời bạn mô tả danh mục (không được để trống): ");
                descriptions = scanner.nextLine();
            } while (descriptions.isEmpty());

            catalog.setDescriptions(descriptions);
            this.save(catalog);
            System.out.println("Đã thêm danh mục thành công");
        }

        IOFile.writeToFile(IOFile.CATALOG_PATH, this.catalogs);
    }

    public void displayAllCatalogs() {
        List<Catalog> allCatalogs = IOFile.readFromFile(IOFile.CATALOG_PATH);
        if (allCatalogs.isEmpty()) {
            System.out.println("Danh sách danh mục rỗng.");
            return;
        }
        for (Catalog catalog : allCatalogs) {
            System.out.println(catalog);
            List<Product> products = catalog.getProducts();
            if (products.isEmpty()) {
                System.out.println("  Không có sản phẩm trong danh mục này.");
            } else {
                for (Product product : products) {
                    System.out.println("  " + product);
                }
            }
        }
    }

    public void editCatalog(int id, String newName, String newDescription) {
        try {
            IOFile.readFromFile(IOFile.CATALOG_PATH);
            Catalog catalog = this.findById(id);
            if (catalog != null) {
                catalog.setCatalogName(newName);
                catalog.setDescriptions(newDescription);
                this.save(catalog);
                System.out.println("Đã sửa thành công");
            } else {
                System.out.println("Không tìm thấy danh mục với mã " + id + " để sửa. Vui lòng chọn lại.");
            }
            IOFile.writeToFile(IOFile.CATALOG_PATH, this.catalogs);
            this.displayAllCatalogs();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void deleteCatalog(int id) {
        IOFile.readFromFile(IOFile.CATALOG_PATH);
        Catalog catalog = this.findById(id);
        if (catalog != null) {
            if (catalog.getProducts().isEmpty()) {
                this.deleteById(id);
                System.out.println("Đã xóa danh mục có id là " + id);
            } else {
                System.out.println("Không thể xóa danh mục có id là " + id + " vì nó có sản phẩm liên quan.");
            }
        } else {
            System.out.println("Không tìm thấy danh mục có id là " + id);
        }
        IOFile.writeToFile(IOFile.CATALOG_PATH, this.catalogs);
        this.displayAllCatalogs();
    }

}
