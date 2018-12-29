package com.example.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

@Controller
public class ExcelReportController extends AbstractController{

	@Override
	@RequestMapping("excel")
	public ModelAndView handleRequestInternal(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		

		
		String output =
			ServletRequestUtils.getStringParameter(request, "output");
		
		//dummy data
		Map<String,String> revenueData = new HashMap<String,String>();
		revenueData.put("Jan-2010", "12");
		revenueData.put("Feb-2010", "23");
		revenueData.put("Mar-2010", "12");
		revenueData.put("Apr-2010", "34");
		revenueData.put("May-2010", "66");
		
		if(output ==null || "".equals(output)){
			//return normal view
			return new ModelAndView("excel/RevenueSummary","revenueData",revenueData);
			
		}else if("JXL".equals(output.toUpperCase())){
			//return excel view
			return new ModelAndView("JxlExcelView","revenueData",revenueData);
			
		}else if("POI".equals(output.toUpperCase())){
			//return excel view
			return new ModelAndView("PoiExcelView","revenueData",revenueData);
			
		}else{
			//return normal view
			return new ModelAndView("excel/RevenueSummary","revenueData",revenueData);
			
		}
		
	}
	
}