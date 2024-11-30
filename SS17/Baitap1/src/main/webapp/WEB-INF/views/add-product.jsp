<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Product Form</title>
</head>
<body>
<h1>${product.id == 0 ? 'Add New Product' : 'Edit Product'}</h1>
<form action="${pageContext.request.contextPath}/products/${product.id == 0 ? 'add' : 'edit'}" method="post">
    <input type="hidden" name="id" value="${product.id}"/>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value="${product.name}" required/>
    <br/>
    <label for="price">Price:</label>
    <input type="number" id="price" name="price" value="${product.price}" step="any" required/>
    <br/>
    <label for="stock">Stock:</label>
    <input type="number" id="stock" name="stock" value="${product.stock}" required/>
    <br/>
    <label for="category">Category:</label>
    <select id="category" name="category.id">
        <c:forEach var="category" items="${categories}">
            <option value="${category.id}" ${category.id == product.category.id ? 'selected' : ''}>${category.name}</option>
        </c:forEach>
    </select>
    <br/>
    <label for="status">Status:</label>
    <input type="checkbox" id="status" name="status" ${product.status ? 'checked' : ''}/>
    <br/>
    <button type="submit">${product.id == 0 ? 'Add' : 'Update'}</button>
</form>
<a href="${pageContext.request.contextPath}/products">Back to List</a>
</body>
</html>
