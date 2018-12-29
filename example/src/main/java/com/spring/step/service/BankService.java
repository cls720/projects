package com.spring.step.service;

import org.springframework.security.access.prepost.PreAuthorize;

import com.spring.step.domain.Account;

public interface BankService {
	public Account readAccount(Long id);

	public Account[] findAccounts();

	@PreAuthorize("hasRole('ROLE_SUPERVISOR') or hasRole('ROLE_TELLER') and (#account.balance + #amount >= -#account.overdraft)")
	public Account post(Account account, double amount);
}
