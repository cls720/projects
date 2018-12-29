package com.spring.step.domain;

public class Account {
	private long id = -1;
	// 持有
	private String holder;
	// 平衡;帐目
	private double balance;
	// 透支;透支额
	private double overdraft = 100.00;

	public Account(String holder) {
		this.holder = holder;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getHolder() {
		return holder;
	}

	public void setHolder(String holder) {
		this.holder = holder;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public double getOverdraft() {
		return overdraft;
	}

	public void setOverdraft(double overdraft) {
		this.overdraft = overdraft;
	}

	public String toString() {
		return "Account[id=" + id + ",balance=" + balance + ",holder=" + holder
				+ ", overdraft=" + overdraft + "]";
	}
}
