<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="include.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Products</title>
</head>
<body>
	<h1>Products</h1>
	<c:forEach items="${model.products}" var="item">
		<div style="width: 600px; line-height: 30px;">
			<div style="width: 400px; float: left;">
				<c:out value="${item.description}"></c:out>
			</div>
			<div style="width: 180px; float: left;">
				<c:out value="${item.price}"></c:out>
			</div>
		</div>
	</c:forEach>
	<h1>
		<a href="<c:url value="priceincrease.do"/>">Increase Prices By
			Spring Form</a>
	</h1>
	<h1>
		<a href="<c:url value="priceincrease2.do"/>">Increase Prices By
			Html Form</a>
	</h1>
	<h2>小结</h2>
	<ul>
		<li>1. messages.properties</li>
		<li>2. JdbcDaoSupport</li>
		<li>3. PriceIncreaseValidator</li>		
	</ul>
</body>
</html>