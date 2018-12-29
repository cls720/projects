package com.spring.spel;

import org.springframework.expression.EvaluationContext;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;

public class HelloSpelTest {
	public static void main(String[] args) {
		EvaluationContext context = new StandardEvaluationContext();
		ExpressionParser parser = new SpelExpressionParser();
		Expression expression = parser
				.parseExpression("#accountService.trade(#ety.sActID,#ety.tActID)+('Hello'+' World').concat(#end)");
		context.setVariable("end", "!Spring El");
		AccountService accountService = new AccountService();		
		Account account = new Account();
		account.setsActID("sourceActId");
		account.settActID("targetActId");
		context.setVariable("accountService", accountService);
		context.setVariable("ety", account);
		System.out.println(expression.getValue(context));
	}

	static class AccountService {
		public void trade(String sActID, String tActID) {
			System.out.println("AccountId:" + sActID + "," + tActID);
		}
	}

	static class Account {
		private String sActID;
		private String tActID;

		public String getsActID() {
			return sActID;
		}

		public void setsActID(String sActID) {
			this.sActID = sActID;
		}

		public String gettActID() {
			return tActID;
		}

		public void settActID(String tActID) {
			this.tActID = tActID;
		}

	}
}
