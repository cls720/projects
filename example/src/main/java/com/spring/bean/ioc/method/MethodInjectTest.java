package com.spring.bean.ioc.method;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.util.StopWatch;

public class MethodInjectTest {
	public static void main(String[] args) {
		BeanFactory beanFactory = new ClassPathXmlApplicationContext("method_inject_bean.xml");
		StandardLookupDemoBean standardBean =(StandardLookupDemoBean)beanFactory.getBean("standardBean");
		System.out.println(standardBean.getMyHelper());
		System.out.println(standardBean.getMyHelper());
		AbstractLoopipMethodDemoBean abstractBean = (AbstractLoopipMethodDemoBean)beanFactory.getBean("abstractBean");
		System.out.println(abstractBean.getMyHelper());
		System.out.println(abstractBean.getMyHelper());
		System.out.println("-------------------------------");
		displayInfo(standardBean);
		displayInfo(abstractBean);
	}
	
	  public static void displayInfo(DemoBean bean){
	      MyHelper helper1=bean.getMyHelper();
	      MyHelper helper2=bean.getMyHelper();
	      System.out.println("Helper instance the same:"+(helper1==helper2));
	      
	      StopWatch stopWatch=new StopWatch();
	      stopWatch.start("TestSpring");
	      for (int i = 0; i < 1000000; i++) {
	          MyHelper helper=bean.getMyHelper();
	          helper.doSomething();
	      }
	      stopWatch.stop();
	      System.out.println(stopWatch.getTotalTimeMillis());
	  }
}
