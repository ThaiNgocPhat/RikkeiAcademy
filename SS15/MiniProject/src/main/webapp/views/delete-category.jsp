<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Xóa danh mục</title>
</head>
<body>
<h1>Xác nhận xóa danh mục</h1>

<p>Bạn có chắc chắn muốn xóa danh mục: <strong>${category.name}</strong>?</p>

<form action="categories?action=delete" method="post">
    <input type="hidden" name="id" value="${category.id}">
    <input type="submit" value="Xóa">
    <a href="categories?action=view">Hủy</a>
</form>
</body>
</html>
