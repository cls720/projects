package com.tools.regex;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegExTest {

	public static void main(String[] args) {
		testMatchBeanName();

	}
	
	public static void testMatchBeanName(){
		String testExpr = "sa.@bean1.method1()+@bean2.method2()+@bean3.method(3)";
		Pattern pattern = Pattern.compile("@(\\w*)\\.");
		Matcher matcher = pattern.matcher(testExpr);
		while (matcher.find()) {
			System.out.println(matcher.group(1));
		}
	}

}
