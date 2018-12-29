package com.example.tools;

import java.io.StringWriter;
import java.util.Map;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;

public class VmUtils {
	/**
	 * 
	 * @Title: getHtmlCodeByVelocity
	 * @Description: 使用velocity生成HTML源码
	 * @param templatePath
	 *            模版存放路径(建议在WebRoot下创建一个目录，传递如../../template/sjy_zjcj_pdf.vm)
	 * @param dataMap
	 *            组装数据
	 * @param velocityEnginespring托管对象，请注入到servicd
	 * @return String
	 * @throws
	 * 
	 * 			@Author
	 *             dyp
	 * @Create Date: 2014-4-17 下午04:18:48
	 */
	public static String getHtmlCodeByVelocity(String templatePath, Map<String, Object> dataMap) throws Exception {
		// 初始化并取得Velocity引擎
		VelocityEngine ve = new VelocityEngine();
		// 取得velocity的模版
		Template t = ve.getTemplate(templatePath, "utf-8");
		// 取得velocity的上下文context
		VelocityContext context = new VelocityContext();
		for (String key : dataMap.keySet()) {
			context.put(key, dataMap.get(key));
		}
		// 输出流
		StringWriter writer = new StringWriter();
		// 转换输出
		t.merge(context, writer);

		String htmlCode = writer.toString();
		return htmlCode;
	}
}
