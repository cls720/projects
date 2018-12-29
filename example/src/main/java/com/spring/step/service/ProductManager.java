package com.spring.step.service;

import java.util.List;

import com.spring.step.domain.Product;

public interface ProductManager {
	public void increasePrice(int percent);

	public List<Product> getProducts();
}
