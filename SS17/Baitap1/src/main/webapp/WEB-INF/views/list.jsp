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
    <title>Choose your condiments</title>
</head>
<body>
<h2>Select condiments for your Sandwich:</h2>
<form action="save" method="post">
    <input type="checkbox" name="condiment" value="Lettuce"> Lettuce<br>
    <input type="checkbox" name="condiment" value="Tomato"> Tomato<br>
    <input type="checkbox" name="condiment" value="Mustard"> Mustard<br>
    <input type="checkbox" name="condiment" value="Mayonnaise"> Mayonnaise<br>
    <input type="submit" value="Submit">
</form>
</body>
</html>

