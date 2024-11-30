<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Danh sách danh mục</title>
</head>
<body>
<h1>Danh sách danh mục</h1>

<table border="1">
    <thead>
    <tr>
        <th>ID</th>
        <th>Tên danh mục</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach var="category" items="${categories}">
        <tr>
            <td>${category.id}</td>
            <td>${category.name}</td>
            <td>${category.status ? "Hoạt động" : "Không hoạt động"}</td>
            <td>
                <a href="categories?action=details&id=${category.id}">Chi tiết</a> |
                <a href="categories?action=update&id=${category.id}">Chỉnh sửa</a> |
                <a href="categories?action=delete&id=${category.id}" onclick="return confirm('Bạn có chắc chắn muốn xóa danh mục này không?');">Xóa</a>
            </td>
        </tr>
    </c:forEach>
    </tbody>
</table>

<a href="categories?action=create">Thêm mới danh mục</a>
</body>
</html>
