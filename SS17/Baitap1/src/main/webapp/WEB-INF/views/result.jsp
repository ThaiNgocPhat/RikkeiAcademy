<%--
  Created by IntelliJ IDEA.
  User: thaingocphat
  Date: 18/9/24
  Time: 10:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Selected Condiments</title>
</head>
<body>
<h2>Your Sandwich includes:</h2>
<ul>
    <c:forEach var="condiment" items="${condiments}">
        <li>${condiment}</li>
    </c:forEach>
</ul>
<a href="/">Choose again</a>
</body>
</html>

