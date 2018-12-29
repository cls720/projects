package com.spring.step.dao;

import com.spring.step.domain.Account;

public interface BankDao {
	public Account readAccount(Long id);

	public void createOrUpdateAccount(Account account);

	public Account[] findAccounts();
}
