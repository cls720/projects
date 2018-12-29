package com.spring.step.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.spring.step.dao.ProductDao;
import com.spring.step.domain.Product;

public class ProductDaoImpl extends JdbcDaoSupport implements ProductDao {
	private final String SELECT_PRODUCTS = "select * from products";
	private final String UPDATE_PRODUCT_PRICE = "update products set price = :price where id = :id";

	public List<Product> getProductList() {
		List<Product> products = getJdbcTemplate().query(SELECT_PRODUCTS,
				new ProductMapper());
		return products;
	}

	public void saveProduct(Product prod) {
		NamedParameterJdbcTemplate tmpl = new NamedParameterJdbcTemplate(
				getJdbcTemplate());
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("price", prod.getPrice());
		paramMap.put("id", prod.getId());
		tmpl.update(UPDATE_PRODUCT_PRICE, paramMap);

	}

	private static class ProductMapper implements
			ParameterizedRowMapper<Product> {
		public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
			Product prod = new Product();
			prod.setId(rs.getInt("id"));
			prod.setDescription(rs.getString("description"));
			prod.setPrice(rs.getDouble("price"));
			return prod;
		}
	}

}
