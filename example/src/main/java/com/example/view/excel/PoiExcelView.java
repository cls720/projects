package com.example.view.excel;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.springframework.web.servlet.view.document.AbstractExcelView;

public class PoiExcelView extends AbstractExcelView {

	@Override
	protected void buildExcelDocument(Map<String, Object> model, HSSFWorkbook workbook, HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		Map<String, Object> revenueData = (Map<String, Object>) model.get("revenueData");
		// 生成一个表格
		HSSFSheet sheet = workbook.createSheet("Revenue Report");
		// 设置表格默认列宽度为15个字节
		sheet.setDefaultColumnWidth((short) 30);

		Row row = sheet.createRow(3);
		Cell h1 = row.createCell(0);
		Cell h2 = row.createCell(1);
		h1.setCellValue("Month");
		h2.setCellValue("Revenue");		

		int rowNum = 1;
		for (Map.Entry<String, Object> entry : revenueData.entrySet()) {
			// create the row data
			Row rowData = sheet.createRow(rowNum);
			rowData.createCell(0).setCellValue(entry.getKey());
			//rowData.createCell(1).setCellType(0);
			rowData.createCell(1).setCellValue(Integer.parseInt(entry.getValue().toString()));			
			rowNum++;
		}
		Row row1 = sheet.createRow(1);
		Cell h3 = row1.createCell(3);
		h3.setCellType(org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA);
		h3.setCellFormula("sum(B2:B4)");
		System.out.println(h3.getNumericCellValue());
		
	}
}
