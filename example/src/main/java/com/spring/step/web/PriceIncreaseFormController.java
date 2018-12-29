package com.spring.step.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.spring.step.domain.PriceIncrease;
import com.spring.step.service.PriceIncreaseValidator;
import com.spring.step.service.ProductManager;

@Controller
public class PriceIncreaseFormController {

	@Autowired
	private ProductManager productManager;

	@RequestMapping(value = "/priceincrease")
	public String priceIncrease() {
		return "step/priceincrease";
	}
	
	@RequestMapping(value = "/priceincrease2")
	public String priceIncrease2() {
		return "step/priceincrease2";
	}

	@RequestMapping(value = "/increasePrice", method = RequestMethod.POST)
	public ModelAndView increasePrice(PriceIncrease pi, BindingResult result) {
		new PriceIncreaseValidator().validate(pi, result);
		if (result.hasErrors()) {
			return new ModelAndView("step/priceincrease2", "errors", result
					.getFieldError("percentage").toString());
		} else {
			productManager.increasePrice(pi.getPercentage());
			return new ModelAndView(new RedirectView("products.do"));
		}
	}

	public ProductManager getProductManager() {
		return productManager;
	}

	public void setProductManager(ProductManager productManager) {
		this.productManager = productManager;
	}

}
