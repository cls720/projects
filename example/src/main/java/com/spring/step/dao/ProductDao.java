package com.spring.step.dao;

import java.util.List;
import com.spring.step.domain.Product;

public interface ProductDao {
	public List<Product> getProductList();

	public void saveProduct(Product prod);
}