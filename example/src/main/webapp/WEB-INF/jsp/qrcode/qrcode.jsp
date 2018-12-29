<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../include.jsp"%>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>二维码　示例</title>
</head>
<body>
	
	<form action="createQrImg.do" method="post">
		content:<input name="content"> 
		<br>
		type:<input type="radio" name="type" value="gif">gif
		<input type="radio" name="type" value="png">png
		<input type="radio" name="type" value="jpg">jpg
		<input type="submit" value="Execute" />
	</form>
	<h1>Servlet</h1>
	<c:if test="${!empty model}">
		<img src="qrcode?content=${model.content}&type=${model.type}"/>
	</c:if>
	<h1>Spring Controller</h1>
	<c:if test="${!empty model}">
		<img src="qrCodeImgUrl.do?content=${model.content}&type=${model.type}"/>
	</c:if>
	
</body>
</html>