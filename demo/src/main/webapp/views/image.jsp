<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>1 Anh</h1>
<img src="${one}" alt="" width="100" height="100">
<h2>nhiều ảnh</h2>
<c:forEach items="${many}" var="url">
    <img src="${url}" alt="" width="100" height="100">
</c:forEach>
</body>
</html>