package com.qrcode.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tools.qrcoder.QrCodeTool;

@WebServlet("/qrcode")
public class QrCodeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String content = request.getParameter("content");
		String type = request.getParameter("type");
		if (content == null || "".equals(content)) {
			content = "null value";
		}
		if (type == null || "".equals(type)) {
			type = "png";
		}
		QrCodeTool.getInstance().encoderQRCode(content, response.getOutputStream(), type, 7);
	}
}
