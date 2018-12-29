package com.example.web;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.entity.Student;
import com.example.util.excel.ExcelUtil;

@Controller
public class MvcDownloadExcelAct {
	@RequestMapping(value = "download_project.do")
	public String download(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		String fileName = "excel文件";
		// 填充projects数据
		List<Student> students = createData();
		List<Map<String, Object>> list = createExcelRecord(students);
		String columnNames[] = { "ID", "项目名", "销售人", "负责人", "所用技术", "备注" };// 列名
		String keys[] = { "id", "name", "saler", "principal", "technology",
				"remarks" };// map中的key
		ByteArrayOutputStream os = new ByteArrayOutputStream();
		try {
			ExcelUtil.createWorkBook(list, keys, columnNames).write(os);
		} catch (IOException e) {
			e.printStackTrace();
		}
		byte[] content = os.toByteArray();
		InputStream is = new ByteArrayInputStream(content);
		// 设置response参数，可以打开下载页面
		response.reset();
		response.setContentType("application/vnd.ms-excel;charset=utf-8");
		response.setHeader("Content-Disposition", "attachment;filename="
				+ new String((fileName + ".xls").getBytes(), "iso-8859-1"));
		ServletOutputStream out = response.getOutputStream();
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;
		try {
			bis = new BufferedInputStream(is);
			bos = new BufferedOutputStream(out);
			byte[] buff = new byte[2048];
			int bytesRead;
			// Simple read/write loop.
			while (-1 != (bytesRead = bis.read(buff, 0, buff.length))) {
				bos.write(buff, 0, bytesRead);
			}
		} catch (final IOException e) {
			throw e;
		} finally {
			if (bis != null)
				bis.close();
			if (bos != null)
				bos.close();
		}
		return null;
	}

	private List<Student> createData() {
		List<Student> dataset = new ArrayList<Student>();
		dataset.add(new Student(10000001, "张三", 20, true, new Date()));
		dataset.add(new Student(20000002, "李四", 24, false, new Date()));
		dataset.add(new Student(30000003, "王五", 22, true, new Date()));
		// 自己实现
		return dataset;
	}

	private List<Map<String, Object>> createExcelRecord(List<Student> students) {
		List<Map<String, Object>> listmap = new ArrayList<Map<String, Object>>();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("sheetName", "sheet1");
		listmap.add(map);
		Student student = null;
		for (int j = 0; j < students.size(); j++) {
			student = students.get(j);
			Map<String, Object> mapValue = new HashMap<String, Object>();
			mapValue.put("id", student.getId());
			mapValue.put("name", student.getName());
			mapValue.put("age", student.getAge());
			mapValue.put("sex", student.getSex());
			listmap.add(mapValue);
		}
		return listmap;
	}
}
