package com.spring.step.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import com.spring.step.service.ProductManager;

public class ProductController implements Controller{
	
	private ProductManager productManager;

	public ModelAndView handleRequest(HttpServletRequest arg0,
			HttpServletResponse arg1) throws Exception {
		Map<String, Object> myModel = new HashMap<String, Object>();
		myModel.put("products", this.productManager.getProducts());
		return new ModelAndView("step/products", "model", myModel);
	}
	
	public void setProductManager(ProductManager productManager) {
		this.productManager = productManager;
	}

}
