package com.dental.DentalToolSupplySystem.controller;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HomeController {
	
	@GetMapping("/")
	public String home() {
	return "index";
	}

	@GetMapping("/login")
	public String login() {
		return "login";
	}

	@GetMapping("/register")
	public String register() {
		return "register";
	}

	@GetMapping("/forgetpassword")
	public String forgetPassword() {
		return "forgetpassword";
	}
	
	@GetMapping("/about")
	public String  about() {
		return "about";
	}
	
	@GetMapping("/cart")
	public String  cart() {
		return "cart";
	}
	
	@GetMapping("/categories")
	public String  categories() {
		return "categories";
	}
	
	@GetMapping("/checkouts")
	public String  checkouts() {
		return "checkouts";
	}
	
	@GetMapping("/contact")
	public String  contact() {
		return "contact";
	}
	
	@GetMapping("/products")
	public String  products() {
		return "products";
	}
	
	@GetMapping("/terms_conditions")
	public String  terms_conditions() {
		return "terms_conditions";
	}
	
	
	
	
	
	
	

}



