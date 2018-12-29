<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ include file="include.jsp"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Html form</h1>
	<form action="increasePrice.do" method="post">
		<div style="width: 100%; line-height: 30px;">
			<div style="width: 20%; float: left">
				<input name="percentage"/>
			</div>
			<div style="width: 60%; float: left">				
				${errors}
			</div>
		</div>
		<input type="submit" value="Execute" />
	</form>
</body>
</html>