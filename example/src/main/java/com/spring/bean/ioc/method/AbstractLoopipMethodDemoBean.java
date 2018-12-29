package com.spring.bean.ioc.method;

public abstract class AbstractLoopipMethodDemoBean implements DemoBean {

	public abstract MyHelper getMyHelper();

	public void someOperation() {
		getMyHelper().doSomething();
	}

}
