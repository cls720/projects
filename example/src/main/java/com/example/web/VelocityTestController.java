package com.example.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/vm/") 
public class VelocityTestController {
	
	@RequestMapping(value = "index")
	public String index(Model model) {
		String name = "tester";
		model.addAttribute("name", name);
		return "index";
	}
	
}
