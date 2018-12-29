package com.example.tools;

import java.io.FileOutputStream;
import java.io.OutputStream;

import org.xhtmlrenderer.pdf.ITextFontResolver;
import org.xhtmlrenderer.pdf.ITextRenderer;

import com.itextpdf.text.pdf.BaseFont;

public class PdfUtils {
	/**
	 * 
	 * @Title: doPdfByFS
	 * @Description: 使用Flying sauser生成PDF
	 * @param htmlCode
	 *            HTML源码
	 * @param outPath
	 *            文件保存路径
	 * @param fileName
	 *            文件保存名称 void
	 * @throws
	 * 
	 * 			@Author
	 *             dyp
	 * @Create Date: 2014-4-17 下午04:19:36
	 */
	private void doPdfByFS(String htmlCode, String outPath, String fileName) throws Exception {
//		String fontFamily = PropertyUtil.getInfo("FONT_FAMILY"); // 字体存放路径
//		String imgPath = PropertyUtil.getInfo("IMG_PATH");
		// 图片存放路径
		OutputStream os = new FileOutputStream(outPath + fileName);
		ITextRenderer renderer = new ITextRenderer();
		ITextFontResolver fontResolver = renderer.getFontResolver();
//		fontResolver.addFont(fontFamily, BaseFont.IDENTITY_H, BaseFont.NOT_EMBEDDED);
		// DOCTYPE 必需写否则类似于 这样的字符解析会出现错误
		renderer.setDocumentFromString(htmlCode);
		// 解决图片的相对路径问题
//		renderer.getSharedContext().setBaseURL(imgPath);
		renderer.layout();
		renderer.createPDF(os);
		os.close();
	}
}
