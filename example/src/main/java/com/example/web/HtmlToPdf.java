package com.example.web;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URL;
import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.xhtmlrenderer.pdf.ITextFontResolver;
import org.xhtmlrenderer.pdf.ITextRenderer;

import com.lowagie.text.pdf.BaseFont;

@Controller
public class HtmlToPdf {

	@RequestMapping("html2pdf")
	public void html2pdf(HttpServletRequest request, HttpServletResponse response) throws Exception {
		ServletContext sc = request.getSession().getServletContext();
		String rootpath = sc.getRealPath(""); // 值为D:\apache-tomcat-6.0.26\webapps\webmonitor
		// 把路径中的反斜杠转成正斜杠
		rootpath = rootpath.replaceAll("\\\\", "/"); // 值为D:/apache-tomcat-6.0.26/webapps/webmonitor
		// 临时存储目录
		String pdfPathName = rootpath + "/WebReport.pdf";
		ArrayList<String> list = new ArrayList<String>();
		list.add("date: 2016/10/14");
		list.add("actor: cls");
		list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页2");
		list.add("date: 2016/10/14");
		list.add("actor: cls");
		list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页2");
		list.add("date: 2016/10/14");
		list.add("actor: cls");
		list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页2");
		list.add("date: 2016/10/14");
		list.add("actor: cls");
		list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页2");
		list.add("date: 2016/10/14");
		list.add("actor: cls");
		list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页2");
		list.add("date: 2016/10/1555");
		list.add("actor: cls");
		list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");list.add("cn:中文");
		list.add("cn:中文");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页1");
		list.add("cn:分页1");list.add("cn:分页1");list.add("cn:分页3");
		// for (int i = 0; i < outstreamlist.size(); i++) {
		// list.add(outstreamlist.get(i));
		// }
		// 调用方法
		boolean flag = createPdf(list, pdfPathName, request, response);
		if (flag == true) {
			response.setContentType("application/pdf");
			// servlet输出流
			ServletOutputStream outr = null;
			// 传送的文件的url地址
			outr = response.getOutputStream();
			try {
				outPdf2(pdfPathName, outr);
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
			
//			// 要实现另存为下载,必须满足两个条件：导入commons-upload.jar包，表单提交			
//			try {
//				
//				
//				byte by[] = new byte[1024];
//				File fileLoad = new File(pdfPathName);
//				response.reset();				
//				response.setHeader("Content-Disposition", "attachment; filename=WebReport.pdf");
//				long fileLength = fileLoad.length();
//				String length1 = String.valueOf(fileLength);
//				response.setHeader("Content_Length", length1);
//				FileInputStream in = new FileInputStream(fileLoad);
//				int n;
//				while ((n = in.read(by)) != -1) {
//					out.write(by, 0, n);
//				}
//				in.close();
//				out.flush();
//
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
		} else {
			response.getWriter().write("create pdf error.");
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

	// 生成pdf
	public boolean createPdf(ArrayList<String> list, String pdfPathName, HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		/**
		 * 用rootpath指定目录也可以生成pdf文件，只不过不能在myeclipse的左边导航窗口中看不到而已
		 * 左边导航窗口对应C盘目录下的workspace目录下程序 用rootpath指定的目录是D盘Tomcat目录
		 */
		ServletContext sc = request.getSession().getServletContext();
		String rootpath = sc.getRealPath(""); // 值为D:\apache-tomcat-6.0.26\webapps\webmonitor
		// 把路径中的反斜杠转成正斜杠
		rootpath = rootpath.replaceAll("\\\\", "/"); // 值为D:/apache-tomcat-6.0.26/webapps/webmonitor

		boolean flag = false;
		String outputFile = pdfPathName;
		// 指定目录导出文件
		OutputStream os = new FileOutputStream(outputFile);
		ITextRenderer renderer = new ITextRenderer();
		ITextFontResolver fontResolver = renderer.getFontResolver();
		fontResolver.addFont("C:/Windows/fonts/simsun.ttc", BaseFont.IDENTITY_H, BaseFont.NOT_EMBEDDED);
		StringBuffer html = new StringBuffer();
		// 组装成符合W3C标准的html文件，否则不能正确解析
		html.append(
				"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">");
		html.append("<html xmlns=\"http://www.w3.org/1999/xhtml\">").append("<head>")
				.append("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />")
				.append("<style type=\"text/css\" mce_bogus=\"1\">body {font-family: SimSun;}</style>")
				.append("<style type=\"text/css\">img {width: 500px;}</style>")
				.append("<style type=\"text/css\">table {font-size:13px;}</style>").append("</head>").append("<body>");
		html.append("<center>");
		html.append("<h1>统计报表</h1>");
		for (int i = 0; i < list.size(); i++) {
			html.append("<div>" + list.get(i) + "</div>");
		}
		html.append("</center>");
		html.append("</body></html>");
		try {
			renderer.setDocumentFromString(html.toString());
			// 解决图片的相对路径问题,图片路径必须以file开头
			renderer.getSharedContext().setBaseURL("file:/" + rootpath);
			renderer.layout();
			renderer.createPDF(os);
			os.close();
			flag = true;
		} catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}

}
