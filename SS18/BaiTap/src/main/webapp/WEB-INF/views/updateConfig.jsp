<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Mail Configuration</title>
</head>
<body>
<h1>Update Mail Setting</h1>
<form:form action="/doAdd" method="post" modelAttribute="mail">
    <!-- Language -->
    <form:label path="language">Language</form:label>
    <select id="language" name="language" form:field="language">
        <option value="vi" <c:if test="${mail.language == 'vi'}">selected</c:if>>Tiếng Việt</option>
        <option value="en" <c:if test="${mail.language == 'en'}">selected</c:if>>English</option>
        <option value="jap" <c:if test="${mail.language == 'jap'}">selected</c:if>>Japanese</option>
    </select>
    <br/>

    <!-- Pages -->
    <form:label path="pages">Pages</form:label>
    <select id="pages" name="pages" form:field="pages">
        <option value="5" <c:if test="${mail.pages == 5}">selected</c:if>>5</option>
        <option value="10" <c:if test="${mail.pages == 10}">selected</c:if>>10</option>
        <option value="15" <c:if test="${mail.pages == 15}">selected</c:if>>15</option>
        <option value="25" <c:if test="${mail.pages == 25}">selected</c:if>>25</option>
        <option value="50" <c:if test="${mail.pages == 50}">selected</c:if>>50</option>
        <option value="100" <c:if test="${mail.pages == 100}">selected</c:if>>100</option>
    </select>
    <br/>

    <!-- Spam filter -->
    <form:label path="spams">Spams filter</form:label>
    <form:checkbox path="spams" />
    <br/>

    <!-- Signature -->
    <form:label path="signature">Signature</form:label>
    <form:textarea path="signature" rows="5" cols="30"></form:textarea>
    <br/>

    <!-- Submit button -->
    <button type="submit">Update</button>
</form:form>
</body>
</html>
