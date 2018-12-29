package com.example.web;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.IOException;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HtmlToPdfServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 向浏览器端输出
		response.setContentType("application/pdf");
		String rootPath = this.getServletContext().getRealPath("/");
		String pdfFileDesc = rootPath + "WebReport.pdf";
		// servlet输出流
		ServletOutputStream outr = null;
		// 传送的文件的url地址
		outr = response.getOutputStream();
		try {
			outPdf2(pdfFileDesc, outr);
		} catch (IOException e) {
			// 处理文件找不到的情况
			try {
				response.reset();
				response.setContentType("text/html;charset=gb2312");
				response.getWriter().println("文件未找到");
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			e.printStackTrace();
		} finally {
			if (outr != null) {
				outr.close();
			}
			System.out.println("pdf顺利输出，请给我的帖子留言");
		}
	}

	/**
	 * 
	 * 输出pdf到浏览器，采用BufferedInputStream和BufferedOutputStream，轻松实战IO流，
	 * 熟悉servlet输出文件到浏览器而不是下载的Demo
	 * 
	 * @param pdfFileDesc
	 * 
	 * @param outr
	 * 
	 * @throws IOException
	 * 
	 */

	public void outPdf(String pdfFileDesc, ServletOutputStream outr) throws IOException {
		// 输入流
		BufferedInputStream bis = null;
		// 输出流
		BufferedOutputStream bos = null;
		URL url = null;
		try {
			url = new URL("file:\\" + pdfFileDesc);
			// 从文件获得输入流
			bis = new BufferedInputStream(url.openStream());
			// 输出到servlet
			bos = new BufferedOutputStream(outr);
			// 利用缓冲数组
			byte[] buff = new byte[2048];
			int bytesRead = 0;
			// 一个简单的读写循环
			while (-1 != (bytesRead = bis.read(buff, 0, buff.length))) {
				bos.write(buff, 0, bytesRead);
				outr.flush();
			}
		} finally {
			if (bis != null) {
				try {
					bis.close();
				} catch (IOException e) {
					// TODOAuto-generated catch block
					e.printStackTrace();
				}
			}
			if (bos != null) {
				try {
					bos.close();
				} catch (IOException e) {
					// TODOAuto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}

	/**
	 * 
	 * 第二种方法 输出pdf到浏览器，采用BufferedInputStream和BufferedOutputStream，轻松实战IO流，
	 * 熟悉servlet输出文件到浏览器而不是下载的Demo
	 * 
	 * @param pdfFileDesc
	 * 
	 * @param outr
	 * 
	 * @throws IOException
	 * 
	 */

	public void outPdf2(String pdfFileDesc, ServletOutputStream outr) throws IOException {
		// 输入流
		BufferedInputStream bis = null;
		// 输出流
		BufferedOutputStream bos = null;
		URL url = null;
		try {
			url = new URL("file:\\" + pdfFileDesc);
			// 从文件获得输入流
			bis = new BufferedInputStream(url.openStream());
			// 输出到servlet
			bos = new BufferedOutputStream(outr);
			// 利用缓冲数组
			byte[] buffer = new byte[2048];
			int len = 0;
			// 另一个简单的读写循环
			while ((len = bis.read(buffer)) != -1) {
				outr.write(buffer, 0, len); // write to client
				outr.flush();
			}
		} finally {
			if (bis != null) {
				try {
					bis.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (bos != null) {
				try {
					bos.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

}
