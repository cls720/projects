package com.tools.html2pdf;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import org.xhtmlrenderer.pdf.ITextRenderer;
import com.itextpdf.text.DocumentException;

public class Html1ToPdf {
	public static void main(String[] args) throws IOException, DocumentException {
		String inputFile = "src/main/webapp/html2pdf/html1.xhtml";
		String url = new File(inputFile).toURI().toURL().toString();
		String outputFile = "src/main/webapp/html2pdf/html1.pdf";
		OutputStream os = new FileOutputStream(outputFile);

		ITextRenderer renderer = new ITextRenderer();
		renderer.setDocument(url);
		renderer.layout();
		renderer.createPDF(os);

		os.close();
	}
}
