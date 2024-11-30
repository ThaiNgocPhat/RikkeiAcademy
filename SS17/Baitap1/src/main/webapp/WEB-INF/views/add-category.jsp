<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Category Form</title>
</head>
<body>
<h1>${category.id == 0 ? 'Add New Category' : 'Edit Category'}</h1>
<form action="${pageContext.request.contextPath}/categories/${category.id == 0 ? 'add' : 'edit'}" method="post">
    <input type="hidden" name="id" value="${category.id}"/>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value="${category.name}" required/>
    <br/>
    <label for="status">Status:</label>
    <input type="checkbox" id="status" name="status" ${category.status ? 'checked' : ''}/>
    <br/>
    <button type="submit">${category.id == 0 ? 'Add' : 'Update'}</button>
</form>
<a href="${pageContext.request.contextPath}/categories">Back to List</a>
</body>
</html>
