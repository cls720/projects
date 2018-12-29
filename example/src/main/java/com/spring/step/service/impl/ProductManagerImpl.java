package com.spring.step.service.impl;

import java.util.List;

import com.spring.step.dao.ProductDao;
import com.spring.step.domain.Product;
import com.spring.step.service.ProductManager;

public class ProductManagerImpl implements ProductManager {
	private ProductDao productDao;

	public void increasePrice(int percent) {
		List<Product> products = productDao.getProductList();
		if (products != null) {
			for (Product product : products) {
				double newPrice = product.getPrice().doubleValue()
						* (100 + percent) / 100;
				product.setPrice(newPrice);
				productDao.saveProduct(product);
			}
		}
	}

	public List<Product> getProducts() {
		return productDao.getProductList();
	}

	public void setProductDao(ProductDao productDao) {
		this.productDao = productDao;
	}

}
