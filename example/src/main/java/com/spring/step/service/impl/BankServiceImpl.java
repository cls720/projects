package com.spring.step.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import com.spring.step.dao.BankDao;
import com.spring.step.domain.Account;
import com.spring.step.service.BankService;

@Service("bankService")
public class BankServiceImpl implements BankService {
	@Autowired
	private BankDao bankDao;

	// Not used unless you declare a <protect-pointcut>
	// @Pointcut("execution(* bigbank.BankServiceImpl.*(..))")
	public void myPointcut() {
	}

	public BankServiceImpl(BankDao bankDao) {
		Assert.notNull(bankDao);
		this.bankDao = bankDao;
	}

	public Account[] findAccounts() {
		return this.bankDao.findAccounts();
	}

	public Account post(Account account, double amount) {
		Assert.notNull(account);
		// We read account bank from DAO so it reflects the latest balance
		Account a = bankDao.readAccount(account.getId());
		if (a == null) {
			throw new IllegalArgumentException(
					"Couldn't find requested account");
		}

		a.setBalance(a.getBalance() + amount);
		bankDao.createOrUpdateAccount(a);
		return a;
	}

	public Account readAccount(Long id) {
		return bankDao.readAccount(id);
	}

}
